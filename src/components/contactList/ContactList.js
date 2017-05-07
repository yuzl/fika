import React, { Component } from 'react'
import Face from '../face/Face'

import './contactList.scss'

class ContactList extends Component {

  // Aktiver CONTACT mit entsprechenden Ausgaben
  setActiveContact = (value) => {
    const contactId = value

    this.props.changeContact(value)

    this.props.expenses
      .fetchExpenses(this.props.user.id, contactId)
  }

  render () {
    return (
      <div className="contactList">
        <div className="contactList">
            { this.props.contacts.map( (data, key) =>
              <Face
                key={key}
                setActiveContact={ this.setActiveContact }
                {...data}
              />
            ) }
          </div>
      </div>
    )
  }
}

export default ContactList;
