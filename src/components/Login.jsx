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
        <h1 className="page-title">Book-shelf App</h1>
        <div className="callout callout-auth">
          <h3>Log In</h3>
          <p>
            Please type your username and password.
          </p>
          <form>
            Username: <input type="text" name="username" ref="username" placeholder="input username..."/>
          Password:<input type="password" name="password" ref="password" placeholder="input password..."/>
          </form>
          <div className="expanded button-group">
            <button className="success button" onClick={this.doLogin}>Log In</button>
            <Link className="alert button" to="/signup">Sign Up</Link>
          </div>
          <div>
            <p>{this.props.loginErrorMSG}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
