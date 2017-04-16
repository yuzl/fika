import { observable } from 'mobx';

class User {
  @observable id = 0

  fetchUser = ( userId ) => {
    this.id = userId
  }

}

export default new User()
