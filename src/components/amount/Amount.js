import React, { Component } from 'react'

class Amount extends Component {
  render () {
    return <div className="displayValue">{ this.props.amount }</div>
  }
}

export default Amount;
