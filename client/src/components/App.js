import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import '../scss_dist/index.css';
import Sidebar from './sidebar';
import Main from './main';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="dev-body">
          <Sidebar />
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
