import React from 'react'
import {  Route,
          Redirect } from 'react-router-dom'

import c from './container'

const routes =
  <div>
    <Redirect exact from='/' to='/contacts' />
    <Route exact path='/contacts' component={ c.Contacts.Collection } />
    <Route path='/contacts/:contactId' component={ c.Contacts.Show } />
  </div>

export default routes;
