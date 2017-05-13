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
    this.state = {
      activeContact : "usr_1f",
      activeColor : "c-1"
    }

    // App initialisieren fred= usr_1f yuri= usr_2y tilman= usr_3t
    this.props.user
      .fetchUser("usr_2y")
    this.props.contacts
      .fetchContacts("usr_2y")
    this.props.expenses
      .fetchExpenses("usr_2y", "usr_1f")
  }

  changeContact = (value) =>{
    this.setState({ activeContact : value })
  }

  changeColor = (value) =>{
    this.setState({ activeColor : value })
  }

  render() {

    // Render sobald Daten geladen wurden
    // TODO Loading Screen gestalten
    if (!this.props.contacts.isLoaded) {
        return <div>Loading...</div>
    }

    return (
      <div id="app">
        <TotalExpenses user={ this.props.user } totalExpenses={ this.props.expenses.entries } />
        <ContactList changeContact={ this.changeContact } changeColor={ this.changeColor } color={ this.state.activeColor } contacts={ this.props.contacts.json } user={ this.props.user } expenses={ this.props.expenses }/>
        <NewExpense color={ this.state.activeColor } user={ this.props.user } activeContact={ this.state.activeContact } expenses={ this.props.expenses }/>
    </div>
    )
  }
}

export default App
