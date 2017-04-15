import { observable, computed } from 'mobx';
import { Fb } from '../Firebase';
import { toJS } from 'mobx';

class Contacts {
  @observable all = [{}]

  constructor() {
    // Once lädt die Kontakte nur einmal zur Laufzeit
    Fb.contacts.once('value', (snapshot) => {
      this.all = snapshot.val()
    })
  }

  @computed get json() {
    return toJS(this.all)
  }

}

export default new Contacts()
