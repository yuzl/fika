import React from 'react'
import styled from 'styled-components';

const StyledBorrowerInfo = styled.div`
  overflow: hidden;
  text-align: center;

  span {
    display: inline-block;
    margin: 0;
    height: 1em;
    transition: all $t-short $t-easing;
  }
`;

const StyledBorrowerGet = styled.span`
  &.hidden {
    opacity: 0;
    margin-left: -7em;
  }
`;

const StyledBorrowerGive = styled.span`
  &.hidden {
    opacity: 0;
    margin-right: -7em;
  }
`;

const StyledBorrowerName = styled.span`
  font-weight: 600;
  padding: 0 0.2em;
  color: ${props => props.color};
`;

StyledBorrowerInfo.displayName = 'StyledBorrowerInfo';
StyledBorrowerGet.displayName = 'StyledBorrowerGet';
StyledBorrowerGive.displayName = 'StyledBorrowerGive';
StyledBorrowerName.displayName = 'StyledBorrowerName';

function BorrowerInfo(props) {
    return (
      <StyledBorrowerInfo>
        <StyledBorrowerGet className={props.hideGet}>Ich bekomme von</StyledBorrowerGet>
        <StyledBorrowerName color={ props.contactColor }>{ props.contactName }</StyledBorrowerName>
        <StyledBorrowerGive className={props.hideGive}>bekommt von mir</StyledBorrowerGive>
      </StyledBorrowerInfo>
    )
}

export default BorrowerInfo;
