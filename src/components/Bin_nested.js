import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class Bin_nested extends Component {
  render() {
    return (
      <div className="header">
      <button>{this.props.number}</button>
      </div>
    );
  }
}

export default Bin_nested;
