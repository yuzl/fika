import React, { Component } from 'react'

import './amount.scss'

class Amount extends Component {
  render () {
    return <div id="amount" className={"displayValue " + this.props.color}>{ this.props.amount }</div>
  }
}

export default Amount;
