import React, { Component } from 'react'
import styled from 'styled-components';

const StyledFace = styled.div`
  min-width: 100px;
  height: 100px;
  background: ${props => props.color};
  border-radius: 100px;
  font-size: 16px;
  line-height: 100px;
  font-weight: bold;
  text-align: center;
  color: white;
  margin: 0 5px;
`;

StyledFace.displayName = 'StyledFace';

class Face extends Component {

  render () {
    return (
      <StyledFace
        color={ this.props.color }
        onClick={ () => this.props.setActiveContact(this.props.id) }>

          { this.props.initial }

      </StyledFace>
    )
  }
}

export default Face;
