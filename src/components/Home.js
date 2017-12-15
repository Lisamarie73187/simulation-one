import React, { Component } from 'react';
import logo from '../logo.png';
import '../App.css'
import {Link} from 'react-router-dom';

import Bin from './Bin'


class Home extends Component {
  render() {
    return (
         /* Simulation-1 36G -JSX */
      <div className="header">
        <header className="header-bar">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SHELFIE</h1>
        </header>
        {/* simulation 42E */}
        <Link to = {`/bin:id`}> <Bin title='Shelf A'></Bin></Link>
        <Link to = {`/bin:id`}> <Bin title='Shelf B'></Bin></Link>
        <Link to = {`/bin:id`}> <Bin title='Shelf C'></Bin></Link>
        <Link to = {`/bin:id`}> <Bin title='Shelf D'></Bin></Link>
       {/* simulation 36H nested? to BIN? */}
        <div>

        </div>
      </div>
    );
  }
}
// simulation 37E-2
export default Home;
