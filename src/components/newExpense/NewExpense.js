import React, { Component } from 'react';

import Amount from '../amount/Amount'
import Keyboard from '../keyboard/Keyboard'

import './NewExpense.scss'

class NewExpense extends Component {
  constructor(props){
    super(props)

    this.state = { amount : 0 }
  }

  changeAmount = (amount) => {
    this.setState({amount : amount})
  }

  render () {
    return (
      <div className="NewExpense">
        <Amount amount={ this.state.amount } color={ this.props.color } />
        <Keyboard amount={ this.state.amount } color={ this.props.color } changeAmount={ this.changeAmount }/>
      </div>
    )
  }
}

export default NewExpense;
