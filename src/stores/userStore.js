import {observable, action} from 'mobx';

class UserStore {
  @observable authStatus = false;
  @observable authorize = false;
  @observable currentUser = {};
  @observable loadingUser;
  @observable updatingUser;
  @observable updatingUserErrors;

  @action pullUser (user, status, authorize) {
    this.authStatus = status;
    this.currentUser = user;
    this.authorize = authorize;
  }
}

export default new UserStore ();
