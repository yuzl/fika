import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'mobx-react'

import routes from './routes'
import stores from './stores'

import './index.scss'

ReactDOM.render(
  <Provider contacts={stores.contacts} expenses={stores.expenses}>
    <Router>{ routes }</Router>
  </Provider>,
  document.getElementById('root')
);
