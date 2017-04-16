import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import ContactList from '../components/contactList/ContactList'
import FirebaseTest from './FirebaseTest'
import './app.scss'

@inject(['user'], ['contacts'], ['expenses']) @observer
class App extends Component {

  constructor(props) {
    super(props)

    // App für usr_1f initialisieren
    this.props.user.fetchUser("usr_1f")
    this.props.contacts.fetchContacts("usr_1f")
  }

  render() {

    // Render sobald Daten geladen wurden
    if (!this.props.contacts.isLoaded) {
        return <div>Loading...</div>
    }

    return (
      <div id="app">
        <FirebaseTest />
        <ContactList contacts={ this.props.contacts.json } />
      </div>
    )
  }
}

export default App
