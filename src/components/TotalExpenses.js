import React, { Component } from 'react'
import styled from 'styled-components';

import PayerInfo from './PayerInfo'
import Amount from './Amount'

import GLOBALS from '../globals.js'

const StyledTotalExpenses = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  transition: all ${GLOBALS['T_LONG']} ${GLOBALS['T_EASING']};
  opacity: ${props => props.show ? '1' : '0' }
`;

StyledTotalExpenses.displayName = 'StyledTotalExpenses';

class TotalExpenses extends Component {

  constructor(props) {
    super(props)

    // State initialise
    this.state = { isBorrower : false }
  }

  // Set State beim ersten Rendern
  componentWillMount() {
    this.isBorrower(this.props.totalExpenses)
  }

  // State ändern wenn props geändert werden
  componentWillReceiveProps(nextProps){
    this.isBorrower(nextProps.totalExpenses)
  }

  isBorrower = (totalExpenses) => {
    const isBorrower = totalExpenses >= 0 ? true : false
    this.setState( {isBorrower :  isBorrower} )
  }

  render () {

    return (
      <StyledTotalExpenses show={ this.props.show }>
         <PayerInfo
            totalExpenses={ this.props.totalExpenses }
            contactColor={ this.props.contactColor }
            contactName={ this.props.contactName }
            isBorrower={ this.state.isBorrower }
          />

         <Amount
            amount={ this.props.totalExpenses }
            contactColor={ this.props.contactColor }
            changePayer={ this.changePayer } />

     </StyledTotalExpenses>
    )
  }
}

export default TotalExpenses;
