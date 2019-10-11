import React, { Component } from "react";
import "./App.css";
import SmurfForm from '../components/SmurfForm';
import Axios from "axios";
import { saveSmurfData } from '../state/actionCreator';
import { connect } from 'react-redux';
import SmurfList from '../components/SmurfList';

class App extends Component {

  componentDidMount() {
    Axios.get('http://localhost:3333/smurfs')
      .then((response) => {
        //dispatched an action to save response.data into the redux store
        this.props.saveSmurfData(response.data);
      })
  }

  // created a method to post smurfdata 
  saveSmurf = (data) => {
    Axios.post('http://localhost:3333/smurfs', data)
      .then((response) => {
        //dispatched an action to save response.data into the redux store
        this.props.saveSmurfData(response.data);
      })
  }


  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm  saveSmurf={this.saveSmurf}/>
        <SmurfList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    smurfs: state.smurfs
  }
}
export default connect(mapStateToProp, { saveSmurfData })(App)
