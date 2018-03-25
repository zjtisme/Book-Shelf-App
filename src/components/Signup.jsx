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
        <h1 className="page-title">Book-shelf App</h1>
        <div className="callout callout-auth">
          <h3>Sign Up</h3>
          Username: <input type="text" ref="username" name="username" placeholder="input username..."/>
        Password:<input type="password" ref="pass1" name="password1" placeholder="input password..."/>
      Password Again: <input type="password" ref="pass2" name="password2" placeholder="input password again..."/>
          <div className="expanded button-group">
            <button className="success button" onClick={this.doSignup}>OK</button>
            <Link className="alert button" to="/">Cancel</Link>
          </div>
          <div>
            <p>{this.props.signupErrorMSG}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
