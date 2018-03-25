import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';

import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './components/HomePage';


class App extends Component {

  constructor() {
    super();

    this.state = {
      login: false,
      userName: '',
      loginErrorMSG: '',
      signupErrorMSG: '',
      userId: 0
    };
  }

  handleLogin = async (username, password) => {
    if(username.length === 0 || password.length === 0) {
      this.setState({...this.state, loginErrorMSG: 'Empty username or password!'});
      return;
    }
    try {
      const response = await axios.get(`/users/username/${username}`);
      const userCands = response.data;
      if(userCands.length === 0) {
        this.setState({...this.state, loginErrorMSG: 'Cannot find this user, please sign up!'});
      } else {
        const cand = userCands[0];
        if(cand['password'] !== password) {
          this.setState({...this.state, loginErrorMSG: 'Error username or password, please try again!'});
        } else {
          this.setState({...this.state, login: true, userName: cand['userName'], userId: cand['id']});
        }
      }
    } catch(error) {
      this.setState({...this.state, loginErrorMSG: 'Cannot connect to database...'});
      console.log('Error logging in!');
      console.log(error);
    }
  }

  handleLogout = () => {
    const newState = {
      login: false,
      userName: '',
      loginErrorMSG: '',
      userId: 0
    };

    this.setState(newState);
  }

  handleSignup = async (username, pass1, pass2) => {
    if(username.length === 0 || pass1.length === 0 || pass2.length === 0) {
      this.setState({...this.state, signupErrorMSG: 'Cannot have empty fields...'});
      return;
    }

    if(pass1 !== pass2) {
      this.setState({...this.state, signupErrorMSG: "Two passwords didn't match..."});
      return;
    }

    try {
      const newUser = {
        'userName': username,
        'password': pass1
      }

      const response = await axios.post('/users/users', newUser);
      if(response.status === 200)
        this.setState({...this.state, signupErrorMSG: 'Register successfully, enjoy!'});
      else {
        this.setState({...this.state, signupErrorMSG: 'Error occurs, the status code is: ' + response.status});
      }
    } catch(error) {
      this.setState({...this.state, signupErrorMSG: 'Cannot connect to database...'});
      console.log('Error signing up!');
      console.log(error);
    }
  }

  render() {
    const LoginComponent = () => (<Login {...this.state} handleLogin={this.handleLogin}/>);
    const SignupComponent = () => (<Signup {...this.state} handleSignup={this.handleSignup}/>);
    const HomePageComponent = () => (<HomePage {...this.state} handleLogout={this.handleLogout}/>);

    return (
      <Router>
        <Switch>
          <Route exact path="/signup" render={SignupComponent}/>
          <Route exact path="/" render={this.state.login?HomePageComponent:LoginComponent}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
