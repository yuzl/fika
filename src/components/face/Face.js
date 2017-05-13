import React, { Component } from 'react'

import './face.scss'

class Face extends Component {

  render () {
    return (
      <div className={"face b" + this.props.color.substring(1)} onClick={() => this.props.setActiveContact(this.props.id)}>
          <div className="face-initial">{ this.props.initial }</div>
      </div>
    )
  }
}

export default Face;
