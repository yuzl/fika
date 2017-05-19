import React from 'react'

import './borrowerInfo.scss'

function BorrowerInfo(props) {
    return (
      <div className="borrowerInfo">
        <span className={"borrowerInfo-get " + props.hideGet}>Ich bekomme von</span>
        <span className={"borrowerInfo-name " + props.contactColor}>{ props.contactName }</span>
        <span className={"borrowerInfo-give " + props.hideGive}>bekommt von mir</span>
      </div>
    )
}

export default BorrowerInfo;
