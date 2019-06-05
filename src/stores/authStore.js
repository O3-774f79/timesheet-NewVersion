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
    email: '',
    password: '',
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
  @action test () {
    _API
      .Login (`admin`, `asmin`)
      .then (res => {
        console.log (res);
      })
      .catch (err => {
        console.log (`Login Error :`, err);
      });
  }
  @action login () {
    this.inProgress = true;
    this.errors = undefined;
    return agent.Auth
      .login (this.values.email, this.values.password)
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
    commonStore.setToken (undefined);
    userStore.forgetUser ();
    return Promise.resolve ();
  }
}

export default new AuthStore ();
