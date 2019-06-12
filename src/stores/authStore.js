import {observable, action} from 'mobx';
import agent from '../agent';
import userStore from './userStore';
import commonStore from './commonStore';
import _API from '../_API';
class AuthStore {
  @observable inProgress = false;
  @observable errors = undefined;
  @observable values = {
    username: '',
    email: 'admin@leaderplanet.co.th',
    password: 'admin',
  };

  @action setUsername (username) {
    this.values.username = username;
  }

  @action setEmail (email) {
    this.values.email = email;
  }

  @action setPassword (password) {
    this.values.password = password;
  }

  @action reset () {
    this.values.username = '';
    this.values.email = '';
    this.values.password = '';
  }
  @action async login () {
    this.inProgress = true;
    this.errors = undefined;
    const {email, password} = this.values;
    try {
      const dataRes = await _API.Login (email, password);
      await userStore.pullUser (dataRes, true);
      (await dataRes)
        ? await userStore.errorPullUser (true)
        : await userStore.errorPullUser (false);
      await console.log (dataRes);
    } catch (e) {
      await console.log (`login error :`, e);
      return e;
    }
  }

  @action register () {
    this.inProgress = true;
    this.errors = undefined;
    return agent.Auth
      .register (this.values.username, this.values.email, this.values.password)
      .then (({user}) => commonStore.setToken (user.token))
      .then (() => userStore.pullUser ())
      .catch (
        action (err => {
          this.errors =
            err.response && err.response.body && err.response.body.errors;
          throw err;
        })
      )
      .finally (
        action (() => {
          this.inProgress = false;
        })
      );
  }

  @action logout () {
    userStore.resetUser ();
  }
}

export default new AuthStore ();
