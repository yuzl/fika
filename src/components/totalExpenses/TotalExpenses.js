import React, { Component } from 'react'

import BorrowerInfo from '../borrowerInfo/BorrowerInfo'


import './totalExpenses.scss'

class TotalExpenses extends Component {

  constructor(props) {
    super(props)


    if(this.props.totalExpenses > 0 ) {
      this.state =  { hideGive : 'hidden', hideGet : '' };
    } else {
      this.state = { hideGive : '', hideGet : 'hidden' };
    }

  }

  setBorrower = () => {

    if(this.props.totalExpenses > 0 ) {
      this.setState ({ hideGive : 'hidden', hideGet : '' });
    } else {
      this.setState ({ hideGive : '', hideGet : 'hidden' });
    }
  }

  render () {

    return (
      <div className="totalExpenses">
        <BorrowerInfo hideGet={ this.state.hideGet }  hideGive={ this.state.hideGive } totalExpenses={ this.props.totalExpenses } color={ this.props.color } name={ this.props.name }/>
        <div>
          { this.props.totalExpenses
            .reduce( (accumulator,currentValue) => {
              let x = parseInt(currentValue[1].amount, 10)
              if(currentValue[1].payerId !== this.props.user.id) x = parseInt(currentValue[1].amount, 10)*-1
              return accumulator + x;
            }, 0)
        }
         </div>
       </div>

    )
  }
}

export default TotalExpenses;
