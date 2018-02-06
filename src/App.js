/**
 * [a description]
 * @type {[type]}
 * @flow
 */
// import PropTypes from 'prop-types'; // ES6
import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import './App.css';
import routes from './routes';
class App extends Component<{}> {
  render() {
    return (
      <Router history={browserHistory} routes={routes} />
    );
  }
}

export default App;
