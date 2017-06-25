import React, { Component } from 'react'


class Expenses extends Component {
  render () {
    return (
      <ul>
        {this.props.expenses.slice().map(info =>
          <li key={info.id}>
             { info.amount }
          </li>
        )}
      </ul>
    )
  }
}

export default Expenses;
