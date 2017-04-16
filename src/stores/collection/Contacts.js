import { observable, computed, toJS } from 'mobx';
import { Fb } from '../Firebase';

class Contacts {
  @observable all = []
  @observable isLoaded = false

  fetchContacts = ( userId ) => {
    // .once lädt die Kontakte nur einmal zur Laufzeit
    Fb.contacts.child(userId).on('value', (user) => {

      // Daten zurücksetzen
      this.all = []
      this.isLoaded = false

      // Finde alle hinterlegten Kontakte
      user.val().contacts.forEach((data, key) => {
        Fb.contacts.child(data).once('value', (snap) => {
          let contact = snap.val()
          contact.id = data

          this.all.push( contact )

          // Starte App wenn Daten geladen
          if(key + 1 === user.val().contacts.length) {
            this.isLoaded = true
          }
        })
      })
    })

  }

  @computed get json() {
    return toJS(this.all)
  }

  @computed get entries() {
    return Object.entries(toJS(this.all))
  }

}

export default new Contacts()
