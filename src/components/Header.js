import React from 'react';
import {Link} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import {toJS} from 'mobx';
import {Divider, Icon} from 'antd';
const LoggedOutView = props => {
 
  if (!props.currentUser) {
    return (
      
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
        </li>

      </ul>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-md-right">
        <li className="nav-item">
          <Link
            to="/inbox"
            className="nav-link"
            style={{color: 'black', cursor: 'pointer'}}
          >
            <Icon type="table" />
            Inbox
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Benefit"
            className="nav-link"
            style={{color: 'black', cursor: 'pointer'}}
          >
            <i className="ion-compose" />&nbsp;Benefit
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/settings"
            className="nav-link"
            style={{color: 'black', cursor: 'pointer'}}
          >
            <i className="ion-gear-a" />&nbsp;Settings
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/timesheet"
            className="nav-link"
            style={{color: 'black', cursor: 'pointer'}}
          >
            <i className="ion-gear-a" />&nbsp;Timesheet
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/login"
            className="nav-link"
            style={{color: 'black', cursor: 'pointer'}}
          >
            <i className="ion-gear-a" />&nbsp;Signout
          </Link>
        </li>
      </ul>
    );
  }

  return null;
};

@inject ('userStore', 'commonStore')
@observer
class Header extends React.Component {
  render () {
    return (
      <nav
        className="navbar navbar-light"
        style={{backgroundColor: 'lightskyblue', marginBottom: 10}}
      >
        <div className="container">
          
          <Link to="/inbox" className="navbar-brand">
            {this.props.commonStore.appName.toUpperCase ()}
          </Link>
          <LoggedOutView currentUser={this.props.userStore.currentUser} />
          <LoggedInView currentUser={this.props.userStore.currentUser} />

        </div>
      </nav>
    );
  }
}

export default Header;
