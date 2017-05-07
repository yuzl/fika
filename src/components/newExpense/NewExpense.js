import React, { Component } from 'react';

import Amount from '../amount/Amount'
import Keyboard from '../keyboard/Keyboard'
import PayerToggle from '../payerToggle/PayerToggle'

import './NewExpense.scss'

class NewExpense extends Component {
  constructor(props){
    super(props)

    this.state = {
      amount : 0,
      isPayer : true
    }
  }

  changeAmount = (amount) => {
    this.setState({amount : amount})
  }

  changePayer = () => {
    this.setState({isPayer : !this.state.isPayer})
  }

  render () {
    return (
      <div className="NewExpense">
        <PayerToggle color={ this.props.color } name="Peter" changePayer={ this.changePayer } />
        <Amount amount={ this.state.amount } color={ this.props.color } />
        <Keyboard amount={ this.state.amount } color={ this.props.color } changeAmount={ this.changeAmount }/>
      </div>
    )
  }
}

export default NewExpense;
