import React, { Component } from 'react'

import './amount.scss'

class Amount extends Component {
  render () {
    return <div id="amount" className={"amount " + this.props.contactColor} onClick={ () => this.props.changePayer() }>{ this.props.amount }</div>
  }
}

export default Amount;
