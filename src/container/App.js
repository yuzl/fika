import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import ContactList from '../components/contactList/ContactList'
import './app.scss'

@inject(['user'], ['contacts'], ['expenses']) @observer
class App extends Component {

  componentWillMount() {

    // App für User 1
    this.props.user.fetchUser(1)

  }

  // Vorzeichen entsprechend dem Zahslenden
  calcAmount = (user, expense) => {
      if(this.props.user.id === parseInt(expense.contactId)) return expense.amount * -1
      return expense.amount
  }

  // Neue Ausgabe hinzufügen
  addNewExpense = (e) => {
    e.preventDefault()

    const contactId = this.refs.contactId.value;
    const amount = this.refs.amount.value;
    this.props.expenses.add(
      amount,
      this.props.user.id,
      contactId
    )
  }

  // Aktiven Nutzer der App definieren
  setActiveUser = (e) => {
    e.preventDefault()
    this.props.user.fetchUser(parseInt(this.refs.user.value))
  }

  // Aktiver Kontakt mit dem Ausgaben
  setActiveContact = (e) => {
    e.preventDefault()

    const contactId = this.refs.contactId.value;
    this.props.expenses.fetchExpenses(this.props.user.id, contactId)
  }

  render() {

    // Render sobald Daten geladen wurden
    if (!this.props.contacts.isLoaded) {
        return <div>Loading...</div>
    }

    return (
      <div id="app">
        <ContactList contacts={ this.props.contacts.json } />
        <code>FIREBASE TESTING</code>
          <div>
              <form>
                <fieldset>
                  <legend>Select Active User</legend>
                    <select ref='user' onChange={this.setActiveUser}>
                      { this.props.contacts.json.map((data, key) => {
                        return <option value={data.id} key={ key }>{ data.name }</option>
                      }) }
                    </select>
                </fieldset>
                <fieldset>
                  <legend>Select Contact</legend>
                    <select ref='contactId' onChange={this.setActiveContact}>
                      <option disabled selected value> -- select -- </option>
                      { this.props.contacts.json.map((data, key) => {
                        if(data.id === this.props.user.id ) return
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
                <input ref='amount' type="text" placeholder="8"/>
                <button type="submit" className="button">Add Expense</button>
              </fieldset>
            </form>
        </div>
        <ul>
          {this.props.expenses.entries
            .map( ([key, expense]) => (
                  <li key={ key }>
                    { this.calcAmount(this.props.user.id, expense) } – { new Date(expense.timestamp).toUTCString() }
                  </li>
            )
          )}
        </ul>
      </div>
    )
  }
}

export default App
