import React, { Component } from 'react';
import styled from 'styled-components';

import Amount from './Amount'
import Keyboard from './Keyboard'
import PayerToggle from './PayerToggle'

const StyledNewExpense = styled.div`
`;

StyledNewExpense.displayName = 'StyledNewExpense';

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
      <StyledNewExpense>

        <PayerToggle
            isPayer={ this.state.isPayer }
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
