import { observable, action } from 'mobx'
import Expenses from './Expenses.js'

class Contacts {
  @observable all = []

  @observable isLoading = false

  @action async fetchAll() {

          // TODO langfristig firebase nutzen
          this.isLoading = false

          const response = await fetch('https://fika-f86d5.firebaseio.com/users.json')
          const status = await response.status

          var fullUsers = []

          if (status === 200) {
            console.log(">> getContacts")

            await response.json().then((data) => {
              console.log(">> setTotal")
              console.log(data)
              fullUsers = data
            }).then(() => {
              fullUsers.forEach(data => {
                  data.total = Expenses.getTotal(data.id)
              })
            }).then(() => {
              this.all = fullUsers
            })

          }
  }

  @action add(data){
    data.picture = "http://lorempixel.com/100/100"

    const existing = this.all
    this.all = existing.concat(data)
  }

  @action find(contactId) {
    return(
      this.all.slice().filter(c => c.id === parseInt(contactId, 10))
    )
  }

  @action remove(contactId) {
    const existing = this.all
    this.all = existing.filter(
      c => c.id !== contactId
    )
  }

  @action setTotal(contactId, total) {
    this.find(contactId)[0].total = total
  }

}

export default new Contacts();
