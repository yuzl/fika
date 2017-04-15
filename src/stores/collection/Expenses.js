import { observable, computed } from 'mobx';
import { Fb } from '../Firebase';
import { toJS } from 'mobx';

class Expenses {
  @observable all = [{}]

  constructor() {
    Fb.expenses.on('value', (snapshot) => {
      this.all = snapshot.val()
    })
  }

  @computed get json() {
    return toJS(this.all)
  }

  add = (name) => {
    const id = Fb.expenses.push().key
    this.update(id, name)
  }

  update = (id, name) => {
    Fb.expenses.update({[id]: {name}})
  }

  del = (id) => {
    Fb.expenses.child(id).remove()
  }
}

export default new Expenses()
