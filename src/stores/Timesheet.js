import {observable, action} from 'mobx';
import _APi from '../_API';
class Timesheet {
  @observable loading = false;
  @observable timesheetList;

  @action setTimeSheet (c) {
    this.TimesheetList = c;
  }
  @action async TimesheetList (date) {
    this.loading = true;
    try {
      const datares = await _APi.GetTimeSheet (date);
      await this.setTimeSheet (datares);
      this.loading = await false;
    } catch (e) {
      await console.log (`TimesheetListFormService :`, e);
      return e;
    }
  }
}
export default new Timesheet ();
