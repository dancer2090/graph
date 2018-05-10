import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';

import Graph from './containers/graph';
import New from './containers/new';
import createHistory from "history/createBrowserHistory"

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Graph}></Route>
            <Route path="/graph" component={Graph}></Route>
            <Route path="/new" component={New}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
