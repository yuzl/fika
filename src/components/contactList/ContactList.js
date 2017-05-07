import React, { Component } from 'react'
import Face from '../face/Face'

import './contactList.scss'

class ContactList extends Component {

  // Aktiver CONTACT mit entsprechenden Ausgaben
  setActiveContact = (value) => {
    const contactId = value

    this.props.expenses
      .fetchExpenses(this.props.user.id, contactId)

    this.props.changeContact(value)

    this.props.color === "c-2" ?     this.props.changeColor("c-1") : this.props.changeColor("c-2")

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
