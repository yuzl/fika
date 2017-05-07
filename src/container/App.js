import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import NewExpense from '../components/newExpense/NewExpense'

import './app.scss'

@inject(['user'], ['contacts'], ['expenses']) @observer
class App extends Component {

  constructor(props) {
    super(props)

    console.log("not useless")
    // App für fred = usr_1f initialisieren (yuri= usr_2y, tilman= usr_3t)
    this.props.user
      .fetchUser("usr_2y")
    this.props.contacts
      .fetchContacts("usr_2y")
    this.props.expenses
      .fetchExpenses("usr_2y", "usr_1f")

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

    // Render sobald Daten geladen wurden
    // TODO Loading Screen gestalten
    if (!this.props.contacts.isLoaded) {
        return <div>Loading...</div>
    }

    return (
      <div id="app">
        <div>{ this.props.expenses.entries
          .reduce( (accumulator,currentValue) => {
            let x = parseInt(currentValue[1].amount)
            if(currentValue[1].payerId !== this.props.user.id) x = parseInt(currentValue[1].amount)*-1
            return accumulator + x;
          }, 0)
        }</div>
        
        <NewExpense color="c-1" user={ this.props.user } contacts={ this.props.contacts } expenses={ this.props.expenses }/>
    </div>
    )
  }
}

export default App
