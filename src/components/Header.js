import React from 'react';
import {Link} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import {Divider, Icon} from 'antd';
const LoggedOutView = props => {
  return (
    <ul className="nav navbar-nav pull-xs-right">
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Sign in
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Sign up
        </Link>
      </li>

    </ul>
  );
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-md-left">
        <li className="nav-item">
          <Link to="/inbox" className="nav-link" style={{color: 'black'}}>
            <Icon type="table" />
            Inbox
          </Link>
        </li>
        <li className="nav-item">
          <Divider type="vertical" style={{marginTop: 10}} />
        </li>
        <li className="nav-item">
          <Link to="/Benefit" className="nav-link" style={{color: 'black'}}>
            <i className="ion-compose" />&nbsp;Benefit
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/settings" className="nav-link" style={{color: 'black'}}>
            <i className="ion-gear-a" />&nbsp;Settings
          </Link>
        </li>

        <li className="nav-item">
          <Link to={`/@${props.currentUser.username}`} className="nav-link">
            <img src={props.currentUser.image} className="user-pic" alt="" />
            {props.currentUser.username}
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

          <Link to="/" className="navbar-brand">
            {this.props.commonStore.appName.toUpperCase ()}
          </Link>
          {this.props.userStore.currentUser
            ? <LoggedOutView currentUser={this.props.userStore.currentUser} />
            : <LoggedInView currentUser={this.props.userStore.currentUser} />}

        </div>
      </nav>
    );
  }
}

export default Header;
