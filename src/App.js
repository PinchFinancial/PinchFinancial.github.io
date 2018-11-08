import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import { Nav } from './modules/Nav';
import { Home } from './modules/Home';
import { Rent } from './modules/Rent';
import { Blog } from './modules/Blog';
import { Error } from './modules/Error';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <Switch>
              <Route exact path={`/`} component={Error} />
              <Route exact path={`/home`} component={Home} />
              <Route exact path={`/rent`} component={Rent} />
              <Route exact path={`/blog`} component={Blog} />
              <Route render={function () {
                return <p>Not Found</p>
              }} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
