import React, { Component } from 'react'
import styled from 'styled-components'

import PayerInfo from './PayerInfo'

const StyledPayerToggle = styled.div`

`;

class PayerToggle extends Component {

  constructor(props){
    super(props)

    this.state = {
      isBorrower : this.props.isBorrower
    }
  }

  togglePayer = () => {
    if(this.props.changePayer()) this.props.changePayer()
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.isBorrower !== this.props.isBorrower ) {
        this.setState({isBorrower : nextProps.isBorrower})
    }
  }

  render () {

    return (
      <StyledPayerToggle onClick={() => this.togglePayer() }>
        <PayerInfo
            isBorrower={ this.state.isBorrower }
            contactColor={ this.props.contactColor }
            contactName={ this.props.contactName } />
      </StyledPayerToggle>
    )
  }
}

export default PayerToggle;
