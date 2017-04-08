import { observable, action } from 'mobx'

class Expenses {
  @observable all = []

  @observable activeExpenses = []

  @action fetchAll() {
    this.all = [
      { id:0,
        contactId: 1,
        amount: -2
      }, {
        id:1,
        contactId: 2,
        amount: 2
      },
      {
        id:2,
        contactId: 3,
        amount: -22
      },
      {
        id:3,
        contactId: 3,
        amount: 240
      }
    ]
  }

  @action getTotal(contactId){
    const expenses = this.find(contactId).slice();

    var countTotal = 0;
    expenses.map(info =>
      countTotal += parseInt(info.amount, 10)
    )

    return countTotal
  }

  @action add(data){

    const existing = this.all
    this.all = existing.concat(data)

    this.activeExpenses = this.all.slice().filter(c => c.contactId === parseInt(data.contactId, 10))
  }

  @action find(contactId) {
    this.activeExpenses = this.all.slice().filter(c => c.contactId === parseInt(contactId, 10))

    return(
      this.activeExpenses
    )
  }

  @action remove(expenseId) {
      console.log("REMOVE EXPENSE")
  }
}

export default new Expenses();
