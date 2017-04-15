import { observable, computed } from 'mobx';
import { Fb } from '../Firebase';
import { toJS } from 'mobx';

class Expenses {
  @observable all = [{}]

  @computed get json() {
    return toJS(this.all)
  }

  getExpenses = (user1, user2) => {

    // TODO Namensgenerator in das Backend auslagern
    const expenseName = 'exp_'+(user1<user2 ? user1+'_'+user2 : user2+'_'+user1);
    console.log(">>> expenseName", expenseName)

    Fb.expenses.child(expenseName).on('value', (snap) =>{
      console.log( snap.val() )
      this.all = snap.val()
    })
  }

  // TODO Add hinzufügen
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
