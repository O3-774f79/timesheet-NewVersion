import Header from './Header';
import React from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import PrivateRoute from './PrivateRoute';

import Home from './Home';
import Login from './Login';
import Register from './Register';
import Settings from './Settings';
import Loading from './Loading';
import NoMatch from './NotFound';
import Inbox from './Inbox';
import Benefit from './Benefit';
import Timesheet from './Timesheet';
@inject ('userStore', 'commonStore', 'uiStore')
@withRouter
@observer
export default class App extends React.Component {
  componentWillMount () {
    if (!this.props.commonStore.token) {
      this.props.commonStore.setAppLoaded ();
    }
  }

  componentDidMount () {}

  render () {
    // if (this.props.commonStore.appLoaded) {
    return (
      <div>
        <Loading spinning={this.props.uiStore.loading} size={'large'}>
          <Header />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/settings" component={Settings} />
            <PrivateRoute path="/inbox" component={Inbox} />
            <PrivateRoute path="/benefit" component={Benefit} />
            <PrivateRoute path="/timesheet" component={Timesheet} />
            <Route path="/" component={Login} />
            <Route component={NoMatch} />
          </Switch>
        </Loading>
      </div>
    );
    // }
    // return <Header />;
  }
}
