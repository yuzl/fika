import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import NewExpense from '../components/newExpense/NewExpense'
import ContactList from '../components/contactList/ContactList'
import TotalExpenses from '../components/totalExpenses/TotalExpenses'

import './app.scss'

@inject(['user'], ['contacts'], ['expenses']) @observer
class App extends Component {

  constructor(props) {
    super(props)

    // App initialisieren fred= usr_1f yuri= usr_2y tilman= usr_3t
    this.props.user
      .fetchUser("usr_2y")
    this.props.contacts
      .fetchContacts("usr_2y")
    this.props.expenses
      .fetchExpenses("usr_2y", "usr_1f")
  }

  changeContact = (id) =>{
    this.props.contacts
      .setactiveContact(id)
  }

  render() {

    // Render sobald Daten geladen wurden
    // TODO Loading Screen gestalten
    if (!this.props.contacts.isLoaded) {
        return <div>Loading...</div>
    }

    return (
      <div id="app">
        <TotalExpenses user={ this.props.user } totalExpenses={ this.props.expenses.entries } contactName={ this.props.contacts.activeContact.name } contactColor={ this.props.contacts.activeContact.color }  />
        <ContactList changeContact={ this.changeContact } color={ this.props.contacts.activeContact.color } contacts={ this.props.contacts.json } user={ this.props.user } expenses={ this.props.expenses }/>
        <NewExpense user={ this.props.user } activeContact={ this.props.contacts.activeContact } expenses={ this.props.expenses }/>
    </div>
    )
  }
}

export default App
