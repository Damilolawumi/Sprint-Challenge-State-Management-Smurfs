import React, { Component } from "react";
import "./App.css";
import SmurfForm from '../components/SmurfForm';
import Axios from "axios";
import {saveSmurfData} from '../state/actionCreator';
import {connect} from 'react-redux';

class App extends Component {

  componentDidMount () {
    Axios.get ('http://localhost:3333/smurfs')
    .then((response) => {
      console.log(response);
    })
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm/>
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {

  }
}
export default connect (mapStateToProp, {}) (App)
