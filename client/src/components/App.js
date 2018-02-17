import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Link, Switch, HashRouter } from 'react-router-dom';
import store from '../store';
import '../scss_dist/index.css';
import DevEnvironment from './dev_environment';
import SplashPage from './splash';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path="/development" component={DevEnvironment}/>
            <Route path="/" component={SplashPage} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
