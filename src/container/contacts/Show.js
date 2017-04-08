import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'

import './Show.css'

import NewExpense from '../../components/newExpense/NewExpense'
import ContactDetail from '../../components/contact/ContactDetail'
import Remove from '../../components/Remove'

@inject(['contacts'], ['expenses']) @observer
class Show extends Component {
  componentWillMount() {
    if(this.props.contacts.all.slice().length <= 0) this.props.contacts.fetchAll()
    if(this.props.expenses.all.slice().length <= 0) this.props.expenses.fetchAll()

    const contactId = this.props.match.params.contactId;
    const contact = this.props.contacts.find(contactId)[0]

    // Set activeExpenses
    this.props.expenses.find(contactId)

    this.setState({
      contact
   })
  }

  addExpense = (e) => {
    e.preventDefault();

    const amount = this.refs.NewExpense.refs.amount.value;
    const contactId = this.state.contact.id;

    this.props.expenses.add({
      id: this.props.expenses.all.slice().length + 1,
      amount: amount,
      contactId: contactId
    })

    const total = this.props.expenses.getTotal(contactId)

    this.props.contacts.setTotal(contactId, total)
  }

  render () {
    return (
      <div id="Show">
        <Remove id={ this.state.contact.id }  />
        <NewExpense ref="NewExpense" addExpense={this.addExpense}/>
        <ContactDetail
          contact={ this.state.contact }
          expenses={ this.props.expenses.activeExpenses }
        />
        <p><Link to="/contacts">back</Link></p>
      </div>
    )
  }
}

export default Show;
