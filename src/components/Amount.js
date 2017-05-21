import React, { Component } from 'react'
import styled from 'styled-components';

const StyledAmount = styled.div`
  text-align: center;
  font-size: 2.5em;
  color: ${props => props.color};

  &::after{
    content: "€";
    font-size: .4em;
    vertical-align: top;
    padding-top: 1em;
    color: $c-grey;
    font-weight: 400;
  }
`;

StyledAmount.displayName = 'StyledAmount';

class Amount extends Component {
  render () {
    return (
      <StyledAmount
          color={ this.props.contactColor }
          onClick={ () => this.props.changePayer() }>

          { this.props.amount }

      </StyledAmount>
    )
  }
}

export default Amount;
