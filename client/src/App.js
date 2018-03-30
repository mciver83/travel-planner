import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { HashRouter as Router, Route } from 'react-router-dom'

import Login from './components/Login'
import Locations from './components/Locations'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route component={Login} path='/' exact />
          <Route component={Locations} path='/locations' />
        </div>
      </Router>
    );
  }
}

export default App;
