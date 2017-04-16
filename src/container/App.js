import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import ContactList from '../components/contactList/ContactList'
import './app.scss'

@inject(['user'], ['contacts'], ['expenses']) @observer
class App extends Component {
  render() {
    return (
      <div id="app">
        <ContactList contacts={ this.props.contacts.json } />
      </div>
    )
  }
}

export default App
