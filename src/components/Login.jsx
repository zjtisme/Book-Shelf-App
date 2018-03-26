import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {

  doLogin = () => {
      const username = this.refs.username.value;
      const password = this.refs.password.value;
      this.props.handleLogin(username, password);
  }

  render() {
    return (
      <div>
        <h1 className="page-title">Book-Shelf App</h1>
        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3 className="component-title">Log In</h3>

                <label className="input-form"> Username:
                    <input type="text" name="username" ref="username" placeholder="input username..."/>
                </label>

                <label className="input-form"> Password:
                      <input type="password" name="password" ref="password" placeholder="input password..."/>
                </label>

              <div className="expanded button-group input-form">
                <button className="success button" onClick={this.doLogin}>Log In</button>
                <Link className="alert button" to="/signup">Sign Up</Link>
              </div>
              <div>
                <p className="error-message">{this.props.loginErrorMSG}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Login;
