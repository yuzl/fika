import React, { Component } from 'react'
import styled from 'styled-components'

const StyledPayerInfo = styled.div`
  overflow: hidden;
  text-align: center;

  span {
    display: inline-block;
    margin: 0;
    height: 1em;
    transition: all $t-short $t-easing;
  }
`;

const StyledContactName = styled.span`
  font-weight: 600;
  padding: 0 0.2em;
  color: ${props => props.color};
`;

const StyledPayerPhrase = styled.span`

  &:first-of-type {
    opacity: 0;
  }

  &:last-of-type {
    opacity: 1;
  }
`;

StyledPayerInfo.displayName = 'StyledPayerInfo';
StyledPayerPhrase.displayName = 'StyledPayerPhrase';
StyledContactName.displayName = 'StyledContactName';

class PayerInfo extends Component {


  render () {
      return (
        <StyledPayerInfo
          isPayer={ this.props.isPayer }>

          <StyledPayerPhrase>Ich bekomme von</StyledPayerPhrase>
          <StyledContactName color={ this.props.contactColor }>{ this.props.contactName }</StyledContactName>
          <StyledPayerPhrase>bekommt von mir</StyledPayerPhrase>

        </StyledPayerInfo>
      )
  }

}

export default PayerInfo;
