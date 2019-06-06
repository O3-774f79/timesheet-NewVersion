import {observable, action} from 'mobx';

class UiStore {
  @observable loading = false;
}

export default new UiStore ();
