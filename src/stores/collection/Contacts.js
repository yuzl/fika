import { observable, computed, toJS } from 'mobx';
import { Fb } from '../Firebase';

import User from '../User';
import GLOBALS from '../../globals.js'

const COLORS = {
  'c-1': GLOBALS["C_1"],
  'c-2': GLOBALS["C_2"],
  'c-3': GLOBALS["C_3"]
};

class Contacts {
  @observable all = []
  @observable activeContact = {}
  @observable isLoaded = false

  fetchContacts = () => {
    // .once lädt die Kontakte nur einmal zur Laufzeit
    Fb.contacts.child(User.id).on('value', (user) => {

      // Daten zurücksetzen
      this.all = []
      this.isLoaded = false

      // Finde alle hinterlegten Kontakte
      user.val().contacts.forEach((data, key) => {
        Fb.contacts.child(data).once('value', (snap) => {
          let contact = snap.val()
          contact.id = data
          contact.color = COLORS[contact.color] || '#ccc';

          this.all.push( contact )

          // Starte App wenn Daten geladen
          if(key + 1 === user.val().contacts.length) {
            this.activeContact = this.json[0]
            this.isLoaded = true
          }
        })
      })
    })

  }

  setactiveContact(newID){
    this.activeContact = this.json.find(x => x.id === newID)
  }

  // Gibt Einträge als JS Objetc zurück (toJS macht aus MOBX ein JS Object)
  @computed get json() {
    return toJS(this.all)
  }

  // Gibt Einträge im Array wieder (toJS macht aus MOBX ein JS Object)
  @computed get entries() {
    return Object.entries(toJS(this.all))
  }

}

export default new Contacts()
