import React, { Component } from 'react'

import BorrowerInfo from '../borrowerInfo/BorrowerInfo'

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
      <BorrowerInfo hideGet={ this.state.hideGet }  hideGive={ this.state.hideGive } color={ this.props.color } name={ this.props.name }/>
      </div>
    )
  }
}

export default PayerToggle;
