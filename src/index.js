import ReactDOM from 'react-dom';
import promiseFinally from 'promise.prototype.finally';
import React from 'react';
import {HashRouter} from 'react-router-dom';
import {useStrict} from 'mobx';
import {Provider} from 'mobx-react';

import App from './components/App';

import authStore from './stores/authStore';
import commonStore from './stores/commonStore';
import userStore from './stores/userStore';
import uiStore from './stores/uiStore';
import timeSheet from './stores/Timesheet';
import inboxBenefitStore from './stores/inboxBenefitStore';

const stores = {
  authStore,
  commonStore,
  userStore,
  uiStore,
  inboxBenefitStore,
  timeSheet,
};

// For easier debugging
window._____APP_STATE_____ = stores;

promiseFinally.shim ();
useStrict (true);

ReactDOM.render (
  <Provider {...stores}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById ('root')
);
