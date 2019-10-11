import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {combineReducers, createStore, compose, applyMiddleware } from 'redux';
import {Provider } from 'react-redux';
import * as reducers from './state/reducers';
import thunk from 'redux-thunk';


ReactDOM.render(<App />, document.getElementById("root"));
