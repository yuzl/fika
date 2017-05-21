import React, { Component } from 'react'
import styled from 'styled-components';

const StyledFace = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 10px;
  background: ${props => props.color};
  border-radius: 100px;
  `;

const StyledFaceInitial = styled.div`
  font-size: 16px;
  line-height: 100px;
  font-weight: bold;
  text-align: center;
  color: white;
`;

StyledFace.displayName = 'StyledFace';
StyledFaceInitial.displayName = 'StyledFaceInitial';

class Face extends Component {

  render () {
    return (
      <StyledFace
        color={ this.props.color }
        onClick={ () => this.props.setActiveContact(this.props.id) }>

          <StyledFaceInitial>{ this.props.initial }</StyledFaceInitial>

      </StyledFace>
    )
  }
}

export default Face;
