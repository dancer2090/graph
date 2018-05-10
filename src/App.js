import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, browserHistory} from 'react-router-dom';

import Graph from './containers/graph';
import { createHashHistory } from "history";
// var createHashHistory = require('history/lib/createHashHistory');

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" component={Graph}  />     
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
