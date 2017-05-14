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

  // Keylistener um User zu wechseln
  componentWillMount() {
    document.addEventListener("keydown", this._handleKeyDown.bind(this));
  }

  _handleKeyDown = (e) => {
      switch (e.key) {
        case "f":
          console.log(">>> LOADING FRED");
          this.props.user
            .fetchUser("usr_1f")
          this.props.contacts
            .fetchContacts("usr_1f")
          this.props.expenses
            .fetchExpenses("usr_1f", "usr_2y")
          break;
        case "y":
        console.log(">>> LOADING YURI");
          this.props.user
            .fetchUser("usr_2y")
          this.props.contacts
            .fetchContacts("usr_2y")
          this.props.expenses
            .fetchExpenses("usr_2y", "usr_1f")
          break;
        case "t":
          console.log(">>> LOADING TILMAN");
          this.props.user
            .fetchUser("usr_3t")
          this.props.contacts
            .fetchContacts("usr_3t")
          this.props.expenses
            .fetchExpenses("usr_3t", "usr_1f")
          break;
          default:
          break;
      }

  }

  changeContact = (id) => {
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
      <div id="app" className="snapScrolling">
        <TotalExpenses user={ this.props.user } totalExpenses={ this.props.expenses.total } contactName={ this.props.contacts.activeContact.name } contactColor={ this.props.contacts.activeContact.color }  />
        <ContactList changeContact={ this.changeContact } color={ this.props.contacts.activeContact.color } contacts={ this.props.contacts.json } user={ this.props.user } expenses={ this.props.expenses }/>
        <NewExpense user={ this.props.user } activeContact={ this.props.contacts.activeContact } expenses={ this.props.expenses }/>
    </div>
    )
  }
}

export default App
