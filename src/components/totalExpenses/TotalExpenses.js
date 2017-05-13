import React, { Component } from 'react'

import BorrowerInfo from '../borrowerInfo/BorrowerInfo'
import Amount from '../amount/Amount'


import './totalExpenses.scss'

class TotalExpenses extends Component {

  constructor(props) {
    super(props)


    if(this.calcTotalExpenses() > 0 ) {
      this.state =  { hideGive : 'hidden', hideGet : '' };
    } else {
      this.state = { hideGive : '', hideGet : 'hidden' };
    }

  }

  setBorrower = () => {

    if(this.calcTotalExpenses() > 0 ) {
      this.setState ({ hideGive : 'hidden', hideGet : '' });
    } else {
      this.setState ({ hideGive : '', hideGet : 'hidden' });
    }
  }


  calcTotalExpenses = () =>  {

    let totalExpenses = this.props.totalExpenses
      .reduce( (accumulator,currentValue) => {
        let x = parseInt(currentValue[1].amount, 10)
        if(currentValue[1].payerId !== this.props.user.id) x = parseInt(currentValue[1].amount, 10)*-1
        return accumulator + x;
      }, 0)

    return totalExpenses
  }

  render () {

    return (
      <div className="totalExpenses">
        <BorrowerInfo hideGet={ this.state.hideGet }  hideGive={ this.state.hideGive } totalExpenses={ this.props.totalExpenses } contactColor={ this.props.contactColor } contactName={ this.props.contactName }/>
         <Amount amount={ this.calcTotalExpenses() } contactColor={ this.props.contactColor } changePayer={ this.changePayer } />
       </div>

    )
  }
}

export default TotalExpenses;
