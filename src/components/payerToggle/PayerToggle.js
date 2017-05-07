import React, { Component } from 'react'
import Hammer from 'react-hammerjs'

import './payerToggle.scss'

class PayerToggle extends Component {

  constructor(props) {
    super(props)

    this.state = { hideGet : '', hideGive : 'hidden' };

  }

  togglePayer = (e) => {
    console.log('tapped');

    if(this.state.hideGet === 'hidden') {
      this.setState ({ hideGive : 'hidden', hideGet : '' });
    } else {
      this.setState ({ hideGive : '', hideGet : 'hidden' });
    }

  }


  render () {

    return (
      <div className="payerToggle">
        <Hammer onTap={this.togglePayer}>
          <div className="payerToggle-inner">
            <span className={"payerToggle-get " + this.state.hideGet}>Ich bekomme von</span>
            <span className={"payerToggle-name " + this.props.color}>Name</span>
            <span className={"payerToggle-give " + this.state.hideGive}>bekommt von mir</span>
          </div>
        </Hammer>
      </div>
    )
  }
}

export default PayerToggle;
