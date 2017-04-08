import { observable, action } from 'mobx'

class Contacts {
  @observable all = []

  @observable isLoading = false

  @action fetchAll() {
        this.all = [
              { id:1,
                name: 'Hans',
                email: 'hans@hansi.de',
                total: -2,
                picture:'https://randomuser.me/api/portraits/med/men/83.jpg'
              },
              { id:2,
                name: 'Petra',
                email: 'asd@gmx.de',
                total: 2,
                picture:'https://randomuser.me/api/portraits/med/women/83.jpg'
              },
              { id:3,
                name: 'Frank',
                email: 'here@esrik.de',
                total: 218,
                picture:'https://randomuser.me/api/portraits/med/men/81.jpg'
              }
        ]
/*      this.isLoading = false
      const response = await fetch('http://localhost:3000/v1/contacts')
      const status = await response.status

      if (status === 200) {
        this.all = response.json()
      }
*/
  }

  @action add(data){
    data.picture = "http://lorempixel.com/100/100"
    data.total = "0"

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
