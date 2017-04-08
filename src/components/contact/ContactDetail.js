import React, { Component } from 'react'

import Contact from './Contact'

class ContactDetail extends Component {
  render () {
    return (
      <div>
        <Contact
          id={ this.props.contact.id }
          name={ this.props.contact.name }
          picture={ this.props.contact.picture }
          total={ this.props.contact.total }
          />
        <ul>
          {this.props.expenses.slice().map(info =>
            <li key={info.id} className={info.amount > 0 ? 'green' : 'red'}>
               { info.amount }
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default ContactDetail;
