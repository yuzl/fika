import React, { Component } from 'react';
import styled from 'styled-components';

import Amount from './Amount'
import Keyboard from './Keyboard'
import PayerToggle from './PayerToggle'

import GLOBALS from '../globals.js'

const StyledNewExpense = styled.div`
  transform: translateY(20%);
  transition: all ${GLOBALS['T_LONG']} ${GLOBALS['T_EASING']};
  opacity: ${props => props.show ? '1' : '0' };
`;

StyledNewExpense.displayName = 'StyledNewExpense';

class NewExpense extends Component {
  constructor(props){
    super(props)

    this.state = {
      amount : 0,
      isBorrower : true
    }
  }

  changeAmount = (amount) => {
    this.setState({amount : amount})
  }

  changePayer = () => {
    this.setState({isBorrower : !this.state.isBorrower})
  }

  // Neue Ausgabe hinzufügen
  addNewExpense = () => {
      const payer = this.state.isBorrower
      const contactId = this.props.activeContact.id
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
      <StyledNewExpense show={ this.props.show }>

        <PayerToggle
            isBorrower={ this.state.isBorrower }
            contactColor={ this.props.activeContact.color }
            contactName={ this.props.activeContact.name }
            changePayer={ this.changePayer } />

        <Amount
            amount={ this.state.amount }
            contactColor={ this.props.activeContact.color }
            changePayer={ this.changePayer } />

        <Keyboard
            amount={ this.state.amount }
            contactColor={ this.props.activeContact.color }
            changeAmount={ this.changeAmount }
            addNewExpense={ this.addNewExpense }
            />

      </StyledNewExpense>
    )
  }
}

export default NewExpense;
