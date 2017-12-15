import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="header">
        <header className="header-bar">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SHELFIE</h1>
        </header>
        <div>

        </div>
      </div>
    );
  }
}

export default Home;
