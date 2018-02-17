import React, { Component } from 'react';
import '../scss_dist/index.css';
import Sidebar from './sidebar';
import Main from './main';

class App extends Component {
  render() {
    return (
      <div className="dev-body">
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
