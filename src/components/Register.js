import { Link } from 'react-router-dom';
import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('authStore')
@observer
export default class Register extends React.Component {

  componentWillUnmount() {
    this.props.authStore.reset();
  }

  handleUsernameChange = e => this.props.authStore.setUsername(e.target.value);
  handleEmailChange = e => this.props.authStore.setEmail(e.target.value);
  handlePasswordChange = e => this.props.authStore.setPassword(e.target.value);
  handleConPasswordChange = e => this.props.authStore.setConPassword(e.target.value);
  
  handleFirstnameChange = e => this.props.authStore.setFirstname(e.target.value);
  handleLastnameChange = e => this.props.authStore.setLastname(e.target.value);
  handlePhoneChange = e => this.props.authStore.setPhone(e.target.value);
  handleSubmitForm = (e) => {
    e.preventDefault();
    this.props.authStore.register(this.props.authStore.values)
      .then(() => this.props.history.replace('/'));
      console.log(this.props.authStore.values.email)
      console.log(this.props.authStore.values.password)
      console.log(this.props.authStore.values.conpassword)
      console.log(this.props.authStore.values.firstname)
      console.log(this.props.authStore.values.lastname)
      console.log(this.props.authStore.values.startworkingdaytext)
      console.log(this.props.authStore.values.startworkingday)
      console.log(this.props.authStore.values.telno)
      console.log(this.props.authStore.values.roleID)

  };

  render() {
    const { values, errors, inProgress } = this.props.authStore;

    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign Up</h1>
             

              <form onSubmit={this.handleSubmitForm}>
                <fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
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

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Confirm Password"
                      value={values.Conpassword}
                      onChange={this.handleConPasswordChange}
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="First Name"
                      value={values.Firstname}
                      onChange={this.handleFirstnameChange}
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Last Name"
                      value={values.Lastname}
                      onChange={this.handleLastnameChange}
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Phone Number"
                      value={values.phone}
                      onChange={this.handlePhoneChange}
                    />
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled={inProgress}
                  >
                    Sign Up
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
