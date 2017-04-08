import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import './Collection.css'

import Contact from '../../components/Contact'
import NewContact from '../../components/NewContact'

@inject(['contacts'], ['expenses']) @observer
class Collection extends Component {

  componentWillMount() {
    if(this.props.contacts.all.slice().length <= 0) this.props.contacts.fetchAll()
    if(this.props.expenses.all.slice().length <= 0) this.props.expenses.fetchAll()
  }

    // Add New Contact Button clicked
    addContact = (e) => {
      e.preventDefault();

      const name = this.refs.NewContact.refs.name.value;
      const email = this.refs.NewContact.refs.email.value;

      this.props.contacts.add({
        id: this.props.contacts.all.length + 1,
        name: name,
        email: email
      })
    }

    render() {
      // ref="NewContact" links to the child component
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
          <NewContact ref="NewContact" addContact={this.addContact} />
        </div>
      );
    }
}

export default Collection;
