import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';


class Bin extends Component {
    constructor(){
        super()
        this.state = {
            binData: []
        }
    }
    componentDidMount(){
        axios.get (`http://localhost:3001/bin${this.id}`)
        .then ( resp => 
        this.setState({
            binData: resp.data
        }))
    }
   
  render() {

    return (
      <div className="Bin">
      {/* Simulation-1 36E -props */}
      <button>{this.props.title}</button>
      {[this.state.binData]}
      {/* <Bin_nested number='Bin 1'></Bin_nested> */}

      </div>
    );
  }
}

export default Bin;
