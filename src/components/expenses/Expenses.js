import React, { Component } from 'react'

import './expenses.scss'

class Expenses extends Component {
  render () {
    return (
      <ul>
        {this.props.expenses.slice().map(info =>
          <li key={info.id} className={info.amount > 0 ? 'green' : 'red'}>
             { info.amount }
          </li>
        )}
      </ul>
    )
  }
}

export default Expenses;
