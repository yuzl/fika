import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import './Collection.scss'

import Contact from '../../components/contact/contact'

@inject(['contacts'], ['expenses']) @observer
class Collection extends Component {

  componentWillMount() {
    if(this.props.contacts.all.slice().length <= 0) {
      this.props.expenses.fetchAll().then(
        this.props.contacts.fetchAll()
      )
    }
  }

    // Add New Contact Button clicked
    addContact = (e) => {
      e.preventDefault();

      const name = this.refs.addContact.refs.name.value;
      const email = this.refs.addContact.refs.email.value;

      this.props.contacts.add({
        id: this.props.contacts.all.length + 1,
        name: name,
        email: email
      })
    }

    render() {
      // ref="addContact" links to the child component
      return (
        <div id="Collection">
          <div className="contactList">
            { this.props.contacts.all.slice().map(info =>
              <Contact
                key={info.id}
                {...info}
              />
            ) }
          </div>
        </div>
      );
    }
}

export default Collection;
