import {observable, action, toJS} from 'mobx';
import _API from '../_API';
class UiStore {
  @observable loading = false;
  @observable projectName;
  @observable projectType;

  @action setProjectName (x) {
    this.projectName = x;
  }
  @action setProjectType (c) {
    this.projectType = c;
  }
  @action async ProjectNameFormService () {
    try {
      const dataRes = await _API.GetProjectName ();
      await this.setProjectName (dataRes);
    } catch (e) {
      await console.log (`ProjectNameFormService :`, e);
      return e;
    }
  }
  @action async ProjectTypeFormService () {
    try {
      const dataRes = await _API.GetProjectType ();
      await this.setProjectType (dataRes);
    } catch (e) {
      await console.log (`ProjectTypeFormService :`, e);
      return e;
    }
  }
}

export default new UiStore ();
