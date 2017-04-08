import { observable, action } from 'mobx'
/*

curl -X POST -d '{"id":7,"amount":12,"contactId":3}' 'https://fika-f86d5.firebaseio.com/expenses.json'

*/
class Expenses {
  @observable all = []

  @observable activeExpenses = []

  @action async fetchAll() {

          // TODO langfristig firebase nutzen
          this.isLoading = false
          const response = await fetch('https://fika-f86d5.firebaseio.com/expenses.json')
          const status = await response.status

          if (status === 200) {
            console.log(">> getExpenses")
            const data = await response.json()
            var arr = Object.keys(data).map(function(k) { return data[k] });

            this.all = await arr
          }
  }

  @action getTotal(contactId){
    const expenses = this.find(contactId).slice();

    var countTotal = 0;
    expenses.map(info =>
      countTotal += parseInt(info.amount, 10)
    )

    return countTotal
  }

  @action async add(data){

    console.log(JSON.stringify(data))
    var existing = this.all
    this.all = existing.concat(data)
    this.find(data.id)

    this.isLoading = false
    const response = await fetch('https://fika-f86d5.firebaseio.com/expenses.json',
                                {
                                  method: 'POST',
                                  body: JSON.stringify(data)
                                 })
    const status = await response.status

    if (status === 200) {
      console.log("Transmitted")
    } else if (status === 405){
      alert("ERROR 405")
    }
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
