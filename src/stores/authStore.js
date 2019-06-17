import { observable, action } from 'mobx';
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
    conpassword: '',
    firstname: '',
    lastname: '',
    startworkingdaytext: '2019-04-01',
    startworkingday: '2019-04-01',
    telno: '',
    roleID: '',
  };

  @action setUsername(username) {
    this.values.username = username;
  }

  @action setEmail(email) {
    this.values.email = email;
  }

  @action setPassword(password) {
    this.values.password = password;
  }
  @action setConPassword(conpassword) {
    this.values.conpassword = conpassword;
  }
  @action setFirstname(firstname) {
    this.values.firstname = firstname;
  }
  @action setLastname(lastname) {
    this.values.lastname = lastname;
  }
  @action setPhone(phone) {
    this.values.telno = phone;
  }

  @action reset() {
    this.values.username = '';
    this.values.email = '';
    this.values.password = '';
  }
  @action async login() {
    this.inProgress = true;
    this.errors = undefined;
    const { email, password } = this.values;
    try {
      const dataRes = await _API.Login(email, password);
      await userStore.pullUser(dataRes, true);
      (await dataRes)
        ? await userStore.errorPullUser(true)
        : await userStore.errorPullUser(false);
      await console.log(dataRes);
    } catch (e) {
      await console.log(`login error :`, e);
      return e;
    }
  }

  @action async register() {
    this.inProgress = true;
    this.errors = undefined;
    const {
      email,
      password,
      conpassword,
      firstname,
      lastname,
      startworkingdaytext,
      startworkingday,
      telno,
      roleID,
    } = this.values;
    try {
      const dataRes = await _API.Register(
        email,
        password,
        conpassword,
        firstname,
        lastname,
        startworkingdaytext,
        startworkingday,
        telno,
        roleID,
      );
      await userStore.pullUser(dataRes, true);
      (await dataRes)
        ? await userStore.errorPullUser(true)
        : await userStore.errorPullUser(false);
      await console.log(dataRes);
    } catch (e) {
      await console.log(`Register Error :`, e);
      return e;
    }
  }


  @action logout() {
    userStore.resetUser();
  }
}

export default new AuthStore();
