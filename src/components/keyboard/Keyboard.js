import React, { Component } from 'react'

import './keyboard.scss'

class Keyboard extends Component {
  render () {
    return (
      <div className="keyboard">
              <div className="keyboard-numpad">
                  <div data-num="1">1</div>
                  <div data-num="2">2</div>
                  <div data-num="3">3</div>
                  <div data-num="4">4</div>
                  <div data-num="5">5</div>
                  <div data-num="6">6</div>
                  <div data-num="7">7</div>
                  <div data-num="8">8</div>
                  <div data-num="9">9</div>
                  <div className="keyboard-numpad-delete">D</div>
                  <div>0</div>
              </div>
              <div className="keyboard-save">Speichern</div>
      </div>
    )
  }
}

export default Keyboard;
