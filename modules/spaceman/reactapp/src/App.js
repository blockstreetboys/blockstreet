import React, { Component } from 'react';
import Deploy from './component/deploy';
import Fund from './component/fund';
import Shipped from './component/shipped';
import Approve from './component/approve';
import Withdraw from './component/withdraw';

class App extends Component {
  render() {
    return (
      <div className="spaceman">
        <Deploy/>
        <Fund />
        <Shipped />
        <Approve />
        <Withdraw />
      </div>
    );
  }
}

export default App;
