import React, { Component } from 'react'
import Face from '../face/Face'

import './contactList.scss'

class ContactList extends Component {

  // Aktiver CONTACT mit entsprechenden Ausgaben
  setActiveContact = (contactId) => {

    this.props.expenses
      .fetchExpenses(this.props.user.id, contactId)

    this.props.changeContact(contactId)
  }

  render () {
    return (
        <div className="contactList">
            { this.props.contacts.map( (data, key) =>
              <Face
                key={key}
                setActiveContact={ this.setActiveContact }
                {...data}
              />
            ) }
          </div>
    )
  }
}

export default ContactList;
