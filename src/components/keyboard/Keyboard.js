import React, { Component } from 'react'
import styled from 'styled-components';

const StyledKeyboard = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100vw;
  height: 40vh;

  background: ${props => props.color};
`;

const StyledKeyboardDigit = styled.div`
  display: flex;
  flex-basis: 33.3vw;
  padding-top: .3em;

  align-items: center;
  justify-content: center;
  cursor: pointer;

  color: #fff;
  font-size: 30px;

`;

StyledKeyboard.displayName = 'StyledKeyboard';
StyledKeyboardDigit.displayName = 'StyledKeyboardDigit';


class Keyboard extends Component {
  constructor(props) {
    super(props)
    // console.log(props);

    this.state = {
      displayValue: '0',
    }
  }

  inputDigit = (digit) => {
    const currentValue = this.state.displayValue === '0' ? '' : this.state.displayValue
    const newValue = currentValue + "" + digit

    this.props.changeAmount(newValue)
    this.setState( {displayValue :  newValue} )
  }

  removeDigit = () => {
    const newValue = this.state.displayValue.length === 1 ? '0' : this.state.displayValue.slice(0, -1)

    this.props.changeAmount(newValue)
    this.setState( {displayValue :  newValue} )
  }

  addExpense = () => {
    this.props.addNewExpense()
    this.setState( {displayValue :  '0'} )
  }

  render () {
    return (
        <StyledKeyboard color={this.props.contactColor}>
          <StyledKeyboardDigit data-num="1" onClick={() => this.inputDigit(1)}>1</StyledKeyboardDigit>
          <StyledKeyboardDigit data-num="2" onClick={() => this.inputDigit(2)}>2</StyledKeyboardDigit>
          <StyledKeyboardDigit data-num="3" onClick={() => this.inputDigit(3)}>3</StyledKeyboardDigit>
          <StyledKeyboardDigit data-num="4" onClick={() => this.inputDigit(4)}>4</StyledKeyboardDigit>
          <StyledKeyboardDigit data-num="5" onClick={() => this.inputDigit(5)}>5</StyledKeyboardDigit>
          <StyledKeyboardDigit data-num="6" onClick={() => this.inputDigit(6)}>6</StyledKeyboardDigit>
          <StyledKeyboardDigit data-num="7" onClick={() => this.inputDigit(7)}>7</StyledKeyboardDigit>
          <StyledKeyboardDigit data-num="8" onClick={() => this.inputDigit(8)}>8</StyledKeyboardDigit>
          <StyledKeyboardDigit data-num="9" onClick={() => this.inputDigit(9)}>9</StyledKeyboardDigit>
          <StyledKeyboardDigit onClick={() => this.removeDigit()}>&larr;</StyledKeyboardDigit>
          <StyledKeyboardDigit data-num="0" onClick={() => this.inputDigit(0)}>0</StyledKeyboardDigit>
          <StyledKeyboardDigit onClick={() => this.addExpense() }>Ok</StyledKeyboardDigit>
        </StyledKeyboard>
    )
  }
}

export default Keyboard;
