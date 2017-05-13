import React, { Component } from 'react'

import './borrowerInfo.scss'

class BorrowerInfo extends Component {


  render () {
    return (
      <div className="borrowerInfo">
        <span className={"borrowerInfo-get " + this.props.hideGet}>Ich bekomme von</span>
        <span className={"borrowerInfo-name " + this.props.contactColor}>{ this.props.contactName }</span>
        <span className={"borrowerInfo-give " + this.props.hideGive}>bekommt von mir</span>
      </div>
    )
  }
}

export default BorrowerInfo;
