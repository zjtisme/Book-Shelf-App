import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Signup extends Component {

  doSignup = () => {
    const username = this.refs.username.value;
    const pass1 = this.refs.pass1.value;
    const pass2 = this.refs.pass2.value;

    this.props.handleSignup(username, pass1, pass2);
  }


  render() {
    return (
      <div>
        <h1 className="page-title">Book-Shelf App</h1>
          <div className="row">
            <div className="columns small-centered small-10 medium-6 large-4">
        <div className="callout callout-auth">
          <h3 className="component-title">Sign Up</h3>
          <label className="input-form">Username:
            <input type="text" ref="username" name="username" placeholder="input username..."/>
          </label>
          <label className="input-form">Password:
            <input type="password" ref="pass1" name="password1" placeholder="input password..."/>
          </label>
          <label className="input-form">Password Again:
            <input type="password" ref="pass2" name="password2" placeholder="input password again..."/>
          </label>
          <div className="expanded button-group input-form">
            <button className="success button" onClick={this.doSignup}>OK</button>
            <Link className="alert button" to="/">Cancel</Link>
          </div>
          <div>
            <p className="error-message">{this.props.signupErrorMSG}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default Signup;
