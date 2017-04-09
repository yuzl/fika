import React, { Component } from 'react'

import './face.scss'

class Face extends Component {

  render () {
    return (
      <div className="face">
          <p className="face-inital">{ this.props.initial }</p>
      </div>
    )
  }
}

export default Face;
