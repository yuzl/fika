import React, { Component } from 'react'

import './keyboard.scss'

class Keyboard extends Component {
  constructor(props) {
    super(props)

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
        <div className={"keyboard b" + this.props.color.substring(1) }>
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
        </div>
    )
  }
}

export default Keyboard;
