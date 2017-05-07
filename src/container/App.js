import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import PayerToggle from '../components/payerToggle/PayerToggle'
import Keyboard from '../components/keyboard/Keyboard'

import './app.scss'

@inject(['user'], ['contacts'], ['expenses']) @observer
class App extends Component {

  constructor(props) {
    super(props)

    // App für fred = usr_1f initialisieren (yuri= usr_2y, tilman= usr_3t)
    // this.props.user.fetchUser("usr_1f")
    // this.props.contacts.fetchContacts("usr_1f")

    /*

     #INFO
     this.props.user // Aktiver Nutzer

     this.props.contacts.entries // Kontakte von USER als Array
     this.props.contacts.json // Kontakte von USER als js object

     #Step 1 Ausgaben zwischen USER und CONTACT (Beispiel 'usr_2y') runterladen
     const contactId = 'usr_2y'
     this.props.expenses.fetchExpenses(this.props.user.id, contactId)

     #Step 2 geladene Ausgaben als Array ausgeben
     this.props.expenses.isLoaded // TRUE wenn Daten geladen wurden
     this.props.expenses.entries // Alle Ausgaben zwischen USER und CONTACT als Array

     #Step 3 Weitere Funktionen im FirebaseTest.js
    */
  }

  render() {

    return (
      <div id="app">
        <PayerToggle color="c-1" />
        <Keyboard color="c-1" />
      </div>
    )
  }
}

export default App
