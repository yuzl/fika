import React, { Component } from 'react'

import './face.scss'

class Face extends Component {

  render () {
    return (
      <div className="face">
          <div className="face-initial" onClick={() => this.props.setActiveContact(this.props.id)}>{ this.props.initial }</div>
      </div>
    )
  }
}

export default Face;
