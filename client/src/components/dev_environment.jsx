import React, { Component } from 'react';
import Sidebar from './sidebar';
import Main from './main';

class DevEnvironment extends Component {

  render () {
    return (
      <div className="dev-body">
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default DevEnvironment;
