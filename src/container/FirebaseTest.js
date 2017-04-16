import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject(['user'], ['contacts'], ['expenses']) @observer
class FirebaseTest extends Component {
    // Vorzeichen entsprechend dem Zahslenden
    calcAmount = ( expense ) => {
        if(this.props.user.id === expense.contactId ) return expense.amount * -1
        return expense.amount
    }

    // Neue Ausgabe hinzufügen
    addNewExpense = (e) => {
      e.preventDefault()

      const payer = !this.refs.payer.checked

      const contactId = this.refs.contactId.value;
      const amount = this.refs.amount.value;
      if(payer){
        this.props.expenses.add(
          amount,
          this.props.user.id,
          contactId
        )
    } else {
      this.props.expenses.add(
        amount,
        contactId,
        this.props.user.id
      )
    }
    }

    // Aktiven Nutzer der App definieren
    setActiveUser = (e) => {
      e.preventDefault()

      this.refs.contactId.value = "sel"

      this.props.user.fetchUser(this.refs.user.value)
      this.props.contacts.fetchContacts(this.refs.user.value)
      this.props.expenses.all = []
    }

    // Aktiver Kontakt mit dem Ausgaben
    setActiveContact = (e) => {
      e.preventDefault()

      const contactId = this.refs.contactId.value;
      this.props.expenses.fetchExpenses(this.props.user.id, contactId)
    }

  render () {

    return(
      <div>

      <code>FIREBASE TESTING</code>
              <div>
                  <form>
                    <fieldset>
                      <legend>Select Active User</legend>
                        <select ref='user' defaultValue={ this.props.user.id } onChange={this.setActiveUser}>
                          <option value="usr_1f">Fred</option>
                          <option value="usr_2y">Yuri</option>
                          <option value="usr_3t">Tilman</option>
                        </select>
                    </fieldset>
                    <fieldset>
                      <legend>Select Contact</legend>
                        <select ref='contactId' defaultValue="sel" onChange={this.setActiveContact}>
                          <option value="sel" disabled> -- select -- </option>

                          { this.props.contacts.json
                            .map((data, key) => {
                            return <option value={data.id} key={ key }>{ data.name }</option>
                          }) }
                        </select>
                    </fieldset>
                  </form>
              </div>
            <div>
                <form onSubmit={this.addNewExpense}>
                  <fieldset>
                    <legend>New Expense</legend>
                    <input ref='amount' type="text" placeholder="42"/>
                    <input ref='payer' type="checkbox" id="payer" />
                    <label htmlFor="payer">Contact paid</label>
                    <button type="submit" className="button">Add Expense</button>
                  </fieldset>
                </form>
            </div>
            <ul>
              {this.props.expenses.entries
                .map( ([key, expense]) => (
                      <li key={ key }>
                        { this.calcAmount(expense) } – { new Date(expense.timestamp).toUTCString() }
                      </li>
                )
              )}
            </ul>
          </div>
        )
  }
}

export default FirebaseTest;
