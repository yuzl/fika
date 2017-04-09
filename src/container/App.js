import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import ContactList from '../components/contactList/ContactList'
import './app.scss'

@inject(['contacts'], ['expenses']) @observer
class App extends Component {

  // fetchAll() im constructor verhindert, dass ohne Daten gerendert wr
  constructor(props){
    super(props)

    if(this.props.contacts.all.slice().length <= 0) {
      this.props.expenses.fetchAll().then(
        this.props.contacts.fetchAll()
        )
    }
  }

  render() {
      var fakeLoading;
      if(!this.props.contacts.isLoaded){
          fakeLoading = <div id="isLoading"><h1>Loading…</h1></div>
      }
      else{
          fakeLoading = <div></div>
      }
      // ref="NewContact" links to the child component
      return (
        <div id="app">
          { fakeLoading }
          <ContactList contacts={ this.props.contacts } />
        </div>
      );
    }
}
export default App;
