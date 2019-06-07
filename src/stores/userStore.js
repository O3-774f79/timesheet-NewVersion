import {observable, action} from 'mobx';

class UserStore {
  @observable authStatus = false;
  @observable authorize = true;
  @observable currentUser = {};
  @observable loadingUser;
  @observable updatingUser;
  @observable updatingUserErrors;

  @action pullUser (user, status) {
    this.authStatus = status;
    this.currentUser = user;
  }
  @action errorPullUser (status) {
    this.authorize = status;
  }
}

export default new UserStore ();
