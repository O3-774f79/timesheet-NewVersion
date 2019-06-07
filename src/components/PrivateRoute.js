import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {inject, observer} from 'mobx-react';

@inject ('userStore', 'commonStore')
@observer
export default class PrivateRoute extends React.Component {
  render () {
    const {userStore, ...restProps} = this.props;
    if (userStore.authorize === true && userStore.authStatus === true) {
      return <Route {...restProps} />;
    } else {
      return <Redirect to="/login" />;
    }
  }
}
