import React, { Component } from 'react'

import contact from './contact'

class contactDetail extends Component {
  render () {
    return (
      <div>
        <contact
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

export default contactDetail;
