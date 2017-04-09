import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Contact.scss'

class Contact extends Component {
  render () {
    return (
      <div className="contactBox">
        <Link to={`/contacts/${this.props.id}`}>
          <img alt={ this.props.name } src={this.props.picture} />
          <div className="total">
            <p className={ this.props.total > 0 ? 'green' : 'red' }>
              { this.props.total }
            </p>
          </div>
          <p className="contactTitle">{ this.props.name }</p>
        </Link>
      </div>
    )
  }
}

export default Contact;
