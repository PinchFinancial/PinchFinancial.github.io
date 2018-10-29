import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Home from './Page/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <Nav />
            <Switch>
              <Route exact path={`/`} component={Home} />
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