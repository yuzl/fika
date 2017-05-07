import React, { Component } from 'react'
import Hammer from 'react-hammerjs'

import './payerToggle.scss'

class PayerToggle extends Component {

  constructor(props) {
    super(props)
  }

  togglePayer = (e) => {
    console.log('tapped');
  }


  render () {

    return (
      <div className="payerToggle">
        <Hammer onTap={this.togglePayer}>
          <div className="payerToggle-inner">
            <span>Ich bekomme von </span>
            <span className="payerToggle-name">Name</span>
            <span> bekommt von mir</span>
          </div>
        </Hammer>
      </div>
    )
  }
}

export default PayerToggle;
