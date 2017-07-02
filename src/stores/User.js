import { observable } from 'mobx';
import { Fb } from './Firebase';

class User {
  @observable id = null

  fetchUser = (  ) => {
    const userId = Fb.firebase.auth().currentUser.uid;

    const updateId = (key) => {
      this.id = key
    }

    return Fb.contacts.orderByChild('UID').equalTo(userId).on('child_added', function(snapshot) {
       updateId(snapshot.key)
    })

  }

}

export default new User()
