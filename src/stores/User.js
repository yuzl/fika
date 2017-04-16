import { observable } from 'mobx';

class User {
  @observable id = ""

  fetchUser = ( userId ) => {
    this.id = userId
  }

}

export default new User()
