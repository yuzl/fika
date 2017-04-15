import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import './app.scss'

@inject(['contacts'], ['expenses']) @observer
class App extends Component {

  render() {
    return (
        <ul>
          { console.log(this.props.expenses.json) }
          {this.props.expenses.json
            .map( (it, key) => (
                  <li key={ key }>{ it.amount }</li>
            )
          )}
        </ul>
    )
  }
}

export default App;
