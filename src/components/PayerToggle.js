import React, { Component } from 'react'

import PayerInfo from './PayerInfo'

class PayerToggle extends Component {

  constructor(props){
    super(props)

    this.state = {
      isBorrower : this.props.isBorrower
    }
  }

  togglePayer = () => {
    if(this.props.changePayer()) this.props.changePayer()
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.isBorrower !== this.props.isBorrower ) {
        this.setState({isBorrower : nextProps.isBorrower})
    }
  }

  render () {

    return (
      <div onClick={() => this.togglePayer() }>
        <PayerInfo
            isBorrower={ this.state.isBorrower }
            contactColor={ this.props.contactColor }
            contactName={ this.props.contactName } />
      </div>
    )
  }
}

export default PayerToggle;
