import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import ContactList from '../components/contactList/ContactList'
import './app.scss'

@inject(['user'], ['contacts'], ['expenses']) @observer
class App extends Component {

  componentWillMount() {

    // App für User 1
    this.props.user.fetchUser(1)

    // Ausgaben mit User 2 laden
    this.props.expenses.fetchExpenses(this.props.user.id, 2)
  }

  // Vorzeichen entsprechend dem Zahslenden
  calcAmount = (user, expense) => {

      // TESTING ONLY
      if(user === expense.contactId) return expense.amount * -1
      return expense.amount

      // "Real" Code
      // if(this.props.user.id === expense.contactId) return expense.amount * -1
      // return expense.amount
  }

  // Neue Ausgabe hinzufügen
  addNewExpense = () => {
    this.props.expenses.add(5, 1, 2)
  }

  render() {
    return (
      <div id="app">
        <ContactList contacts={ this.props.contacts.json } />

        <code>FIREBASE TESTING</code>
        <div>
          <a href="#" onClick={this.addNewExpense}>ADD 5 FROM User1 TO User2</a>
        </div>

        <h3>User1 - User2</h3>
        <ul>
          {this.props.expenses.entries
            .map( ([key, expense]) => (
                  <li key={ key }>
                    { this.calcAmount(this.props.user.id, expense) } – { expense.timestamp }
                  </li>
            )
          )}
        </ul>
      </div>
    )
  }
}

export default App
