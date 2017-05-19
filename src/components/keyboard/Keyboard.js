import React, { Component } from 'react'
import styled from 'styled-components';

// import GLOBALS from '../../globals';

const StyledKeyboard = styled.div`
    width: 100vw;
    color: #fff;
    text-align: center;
    background: ${props => props.base};

    /* &.open {
        transform: translate3d(0,0,0);
    } */

    /* &-numpad {
        width: 80%;
        margin: 0 auto;
        padding: 15px 0;
        font-size: 30px;

        div {
            width: 33.3%;
            padding: 10px 0;
            float: left;
            cursor: pointer;

            &.keyboard-numpad-delete {
                opacity: 0.5;
            }
        }

        &:after {
            content:'';
            display: block;
            clear: both;
        }
    }
    &-save {
        padding: 15px 0;
        cursor: pointer;
    } */
`;

StyledKeyboard.displayName = 'StyledKeyboard';


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
        <StyledKeyboard base={this.props.contactColor}>
                <div className="keyboard-numpad">
                    <div data-num="1" onClick={() => this.inputDigit(1)}>1</div>
                    <div data-num="2" onClick={() => this.inputDigit(2)}>2</div>
                    <div data-num="3" onClick={() => this.inputDigit(3)}>3</div>
                    <div data-num="4" onClick={() => this.inputDigit(4)}>4</div>
                    <div data-num="5" onClick={() => this.inputDigit(5)}>5</div>
                    <div data-num="6" onClick={() => this.inputDigit(6)}>6</div>
                    <div data-num="7" onClick={() => this.inputDigit(7)}>7</div>
                    <div data-num="8" onClick={() => this.inputDigit(8)}>8</div>
                    <div data-num="9" onClick={() => this.inputDigit(9)}>9</div>
                    <div onClick={() => this.removeDigit()}>&larr;</div>
                    <div data-num="0" onClick={() => this.inputDigit(0)}>0</div>
                    <div onClick={() => this.addExpense() }>Ok</div>
                </div>
        </StyledKeyboard>
    )
  }
}

export default Keyboard;
