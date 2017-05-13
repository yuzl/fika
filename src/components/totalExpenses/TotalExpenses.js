import React, { Component } from 'react'

import './totalExpenses.scss'

class TotalExpenses extends Component {


  render () {

    return (
      <div className="totalExpenses">
        { this.props.totalExpenses
          .reduce( (accumulator,currentValue) => {
            let x = parseInt(currentValue[1].amount, 10)
            if(currentValue[1].payerId !== this.props.user.id) x = parseInt(currentValue[1].amount, 10)*-1
            return accumulator + x;
          }, 0)
      }</div>

    )
  }
}

export default TotalExpenses;
