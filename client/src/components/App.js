import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Link, Switch, HashRouter } from 'react-router-dom';
import store from '../store';
import '../scss_dist/index.css';
import Tutorial from './tutorial';
import SplashPage from './splash';
import NavBar from './navbar';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <main>
            <NavBar />
            <Switch>
              <Route path="/tutorial" component={Tutorial}/>
              <Route path="/" component={SplashPage} />
            </Switch>
          </main>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
