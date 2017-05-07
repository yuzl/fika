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

  // Neue Ausgabe hinzufügen
  addNewExpense = () => {
      const payer = this.state.isPayer
      const contactId = this.props.activeContact
      const amount = this.state.amount

      // Unterscheiden wer bezahl hat
      if(payer){
        this.props.expenses
          .add(
              amount,
              this.props.user.id,
              contactId
          )
    } else {
      this.props.expenses
        .add(
          amount,
          contactId,
          this.props.user.id
        )
    }

    this.setState({amount : '0'})
  }

  render () {
    return (
      <div className="NewExpense">
        <PayerToggle color={ this.props.color } name={ this.props.activeContact } changePayer={ this.changePayer } />
        <Amount amount={ this.state.amount } color={ this.props.color } />
        <Keyboard amount={ this.state.amount } color={ this.props.color } changeAmount={ this.changeAmount } addNewExpense={ this.addNewExpense }/>
      </div>
    )
  }
}

export default NewExpense;
