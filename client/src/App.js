import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './components/Login'
import Locations from './components/Locations'
import Categories from './components/Categories'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route component={Login} path='/' exact />
          <Route component={Categories} path='/locations/:location_id/categories' />
          <Route component={Locations} path='/locations' />
        </Switch>
      </Router>
    );
  }
}

export default App;
