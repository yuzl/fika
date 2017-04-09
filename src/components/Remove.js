import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject(['contacts'], ['expenses']) @observer
class Remove extends Component {

  removeContact = (e) => {
    e.preventDefault()
    this.props.contacts.remove(this.props.id)
  }

  render () {
    return(
      <a href="#"
         className="button"
         onClick={this.removeContact}>
         Remove User
      </a>
    )
  }
}

export default Remove;
