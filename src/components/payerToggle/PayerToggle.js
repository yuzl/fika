import React, { Component } from 'react'

import './payerToggle.scss'

class PayerToggle extends Component {

  constructor(props) {
    super(props)

    this.state = { hideGet : '', hideGive : 'hidden' };
  }

  togglePayer = (e) => {
    e.preventDefault()

    this.props.changePayer()

    if(this.state.hideGet === 'hidden') {
      this.setState ({ hideGive : 'hidden', hideGet : '' });
    } else {
      this.setState ({ hideGive : '', hideGet : 'hidden' });
    }
  }


  render () {

    return (
      <div className="payerToggle" onClick={ this.togglePayer }>
          <div className="payerToggle-inner">
            <span className={"payerToggle-get " + this.state.hideGet}>Ich bekomme von</span>
            <span className={"payerToggle-name " + this.props.color}>{ this.props.name }</span>
            <span className={"payerToggle-give " + this.state.hideGive}>bekommt von mir</span>
          </div>
      </div>
    )
  }
}

export default PayerToggle;
