import React, { Component } from 'react'

import './face.scss'

class Face extends Component {

  render () {
    return (
      <div className="face">
          <div className="face-initial">{ this.props.initial }</div>
      </div>
    )
  }
}

export default Face;
