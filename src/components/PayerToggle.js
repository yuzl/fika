import React, { Component } from 'react'
import styled from 'styled-components';

import PayerInfo from './PayerInfo'

const StyledPayerToggle = styled.div``;
StyledPayerToggle.displayName = 'StyledPayerToggle';


class PayerToggle extends Component {

  constructor(props){
    super(props)

    this.state = {
      isPayer : this.props.isPayer
    }
  }

  togglePayer = () => {
    if(this.props.changePayer()) this.props.changePayer()
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.isPayer !== this.props.isPayer ) {
        this.setState({isPayer : nextProps.isPayer})

    }
  }

  render () {

    return (
      <StyledPayerToggle onClick={() => this.togglePayer() }>

        <PayerInfo
            isPayer={ this.state.isPayer }
            contactColor={ this.props.contactColor }
            contactName={ this.props.contactName } />

      </StyledPayerToggle>
    )
  }
}

export default PayerToggle;
