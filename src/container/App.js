import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import ContactList from '../components/contactList/ContactList'
import './app.scss'

@inject(['contacts'], ['expenses']) @observer
class App extends Component {

  componentWillMount() {
    this.props.expenses.getExpenses(1,2)
  }

  render() {
    return (
      <div id="app">
        <ContactList contacts={ this.props.contacts.json } />

        <code>FIREBASE TESTING</code>
        <h3>User1 – User2</h3>
        <ul>
          {this.props.expenses.json
            .map( (it, key) => (
                  <li key={ key }>{ it.amount }</li>
            )
          )}
        </ul>
      </div>
    )
  }
}

export default App;
