import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '@containers/Home/Home';
// import App from './App';

const supportsHistory = 'pushState' in window.history;
export default class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <Router forceRefresh={!supportsHistory}>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

// if use BrowserRouter you have to add historyApiFallback: true at webpack config devserver
// see: https://webpack.js.org/configuration/dev-server/#devserver-historyapifallback
// if use HashRouter you don't have to add any other setting.

