import React, { Component } from 'react';

class TopBar extends Component {

  doLogout = () => {
    this.props.handleLogout();
  }

  render() {
    return (
      <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
                <li className="menu-text">Welcome {this.props.userName}!</li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li><button className="button" onClick={this.doLogout}>Logout</button></li>
            </ul>
          </div>
      </div>

    );
  }
}

export default TopBar;
