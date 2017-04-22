import { observable, computed, toJS } from 'mobx'
import { Fb } from '../Firebase'

import { h } from '../StoreHelpers'

class Expenses {
  @observable all = {}
  @observable isLoaded = false

  @computed get json() {
    return toJS(this.all)
  }

  @computed get entries() {
    return Object.entries(toJS(this.all))
  }

  fetchExpenses = ( userId, contactId ) => {

    // Daten zurücksetzen
    this.all = {}
    this.isLoaded = false

    // Namen der Ausgabe generieren
    const expenseId = h.getExpensesId(userId, contactId)

    Fb.expenses.child(expenseId).on('value', (snap) =>{
      this.all = snap.val()
      this.isLoaded = true
    })

  }

  add = (amount, payerId, contactId) => {

    // Namen der Ausgabe generieren
    const expenseId = h.getExpensesId(payerId, contactId)

    var ret = {
      'amount' : amount,
      'payerId' : payerId,
      'contactId' : contactId,
      'timestamp' : Date.now()
    }

    Fb.expenses.child(expenseId).push(ret)
  }

  // TODO update definieren
  update = (id, name) => {
    // Fb.expenses.update({[id]: {name}})
  }

  // TODO delete definieren
  del = (id) => {
    // Fb.expenses.child(id).remove()
  }
}

export default new Expenses()
