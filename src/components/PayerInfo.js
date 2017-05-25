import React, { Component } from 'react'
import styled from 'styled-components'

import GLOBALS from '../globals.js'


const opacityChooser = (isBorrower) => {
  return isBorrower? [1,0] : [0,1]
}

const marginChooser = (isBorrower) => {
  return isBorrower? [0, "-7em"] : ["-7em",0]
}

const StyledPayerInfo = styled.div`
  overflow: hidden;
  text-align: center;
  display: inline-block;
  width: 100vw;
  margin: 0;
  height: 1em;
`;

const StyledContactName = styled.span`
  font-weight: 600;
  padding: 0 0.2em;
  color: ${props => props.color};
`;

const StyledPayerPhrase = styled.span`

  transition: all ${GLOBALS['T_SHORT']} ${GLOBALS['T_EASING']};


  &:first-of-type {
    opacity: ${props => opacityChooser(props.isBorrower)[0]};
    margin-left: ${props => marginChooser(props.isBorrower)[0]};
  }

  &:last-of-type {
    opacity: ${props => opacityChooser(props.isBorrower)[1]};
    margin-right: ${props => marginChooser(props.isBorrower)[1]};
  }
`;

StyledPayerInfo.displayName = 'StyledPayerInfo';
StyledPayerPhrase.displayName = 'StyledPayerPhrase';
StyledContactName.displayName = 'StyledContactName';

class PayerInfo extends Component {


  render () {
      return (
        <StyledPayerInfo>

          <StyledPayerPhrase isBorrower={ this.props.isBorrower }>Ich bekomme von</StyledPayerPhrase>
          <StyledContactName color={ this.props.contactColor }>{ this.props.contactName }</StyledContactName>
          <StyledPayerPhrase isBorrower={ this.props.isBorrower }>bekommt von mir</StyledPayerPhrase>

        </StyledPayerInfo>
      )
  }

}

export default PayerInfo;
