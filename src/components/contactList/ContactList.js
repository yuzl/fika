import React, { Component } from 'react'
import Face from '../face/Face'

import './contactList.scss'

class ContactList extends Component {
  render () {
    return (
      <div className="contactList">
        <div className="contactList">
            { this.props.contacts.map( (info, key) =>
              <Face
                key={key}
                {...info}
              />
            ) }
          </div>
      </div>
    )
  }
}

export default ContactList;
