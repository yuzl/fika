import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react'

import stores from './stores'
import App from './container'

import './index.css'
import './normalize.css'

ReactDOM.render(
  <Provider user={stores.user} contacts={stores.contacts} expenses={stores.expenses}>
    <App />
  </Provider>,
  document.getElementById('root')
);
