import { observable, computed, toJS } from 'mobx';
import { Fb } from '../Firebase';

class Contacts {
  @observable all = []
  @observable activeContact = {}
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
