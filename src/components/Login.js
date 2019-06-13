import {withRouter, Link} from 'react-router-dom';
import React from 'react';
import {inject, observer} from 'mobx-react';
import LoginAlert from './Alert';

@inject ('authStore', 'userStore', 'uiStore')
@withRouter
@observer
export default class Login extends React.Component {
  componentWillUnmount () {
    this.props.authStore.reset ();
  }
  componentWillMount () {
    this.props.authStore.logout ();
  }
  handleEmailChange = e => this.props.authStore.setEmail (e.target.value);
  handlePasswordChange = e => this.props.authStore.setPassword (e.target.value);
  handleSubmitForm = async e => {
    await e.preventDefault ();
    await this.props.authStore.login ();
    (await this.props.userStore.authorize)
      ? await this.props.history.replace ('/timesheet')
      : await this.props.history.replace ('/login');
    await this.props.uiStore.ProjectNameFormService ();
    await this.props.uiStore.ProjectTypeFormService ();
  };
  render () {
    const {values} = this.props.authStore;
    const {authStatus} = this.props.userStore;
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center">
                <Link to="register">
                  Need an account?
                </Link>
              </p>
              {authStatus
                ? <LoginAlert message="กรุณาตรวจสอบรหัสผ่านอีกครั้ง" />
                : false}
              <form onSubmit={this.handleSubmitForm} autoComplete="on">
                <fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Email"
                      value={values.email}
                      onChange={this.handleEmailChange}
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={this.handlePasswordChange}
                    />
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    // disabled={inProgress}
                  >
                    Sign in
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
