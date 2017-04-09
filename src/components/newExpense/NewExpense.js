import React, { Component } from 'react';

import './NewExpense.compact.css'

class NewExpense extends Component {
  render () {
    return (
      <div className="NewExpense">
          <form onSubmit={this.props.addExpense}>
            <fieldset>
              <legend>New Expense</legend>
              <input ref='amount' type="number" placeholder="Amount"/>
              <button type="submit" className="button">Add</button>
            </fieldset>
          </form>
      </div>
    )
  }
}

export default NewExpense;
