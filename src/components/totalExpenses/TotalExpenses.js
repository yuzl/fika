import React, { Component } from 'react'

import BorrowerInfo from '../borrowerInfo/BorrowerInfo'
import Amount from '../amount/Amount'


import './totalExpenses.scss'

class TotalExpenses extends Component {

  constructor(props) {
    super(props)

    // State initialise
    this.state = { hideGive : '', hideGet : 'hidden' }
  }

  // Set State beim ersten Rendern
  componentWillMount() {
    this.changeBorrower(this.props.totalExpenses)
  }

  // State ändern wenn props geändert werden
  componentWillReceiveProps(nextProps){
    this.changeBorrower(nextProps.totalExpenses)
  }

  changeBorrower = (totalExpenses) => {
    if(totalExpenses > 0 ) {
      this.setState ({ hideGive : 'hidden', hideGet : '' });
    } else {
      this.setState ({ hideGive : '', hideGet : 'hidden' });
    }
  }

  render () {

    return (
      <div className="totalExpenses">
         <BorrowerInfo hideGet={ this.state.hideGet }  hideGive={ this.state.hideGive } totalExpenses={ this.props.totalExpenses } contactColor={ this.props.contactColor } contactName={ this.props.contactName }/>
         <Amount amount={ this.props.totalExpenses } contactColor={ this.props.contactColor } changePayer={ this.changePayer } />
     </div>
    )
  }
}

export default TotalExpenses;
