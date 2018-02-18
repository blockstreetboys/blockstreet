import React, { Component } from 'react';
import Deploy from './component/deploy';
import Fund from './component/fund';
import Shipped from './component/shipped';
import Approve from './component/approve';
import Withdraw from './component/withdraw';
import UserInfo from './component/userInfo';
import web3 from './web3Api/web3Config';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentStage: "STAGE-0",
      contract: {},
      balance: 0,
      arbiterAddress: "",
      shipperAddress: "",
      astronautAddress: ""
    };
    this.setGlobalState = this.setGlobalState.bind(this);
  }

  setGlobalState(key, value) {
    this.setState( {[key]: value});
  }

  render() {
    const globalProps = {
      state: this.state,
      setGlobalState: this.setGlobalState,
    };

    return (
      <div className="main-container">
        <div className="stages">
          <UserInfo globalProps={globalProps} />
          <Deploy globalProps={globalProps}/>
          <Fund globalProps={globalProps}/>
          <Shipped globalProps={globalProps}/>
          <Approve globalProps={globalProps}/>
          <Withdraw globalProps={globalProps}/>
        </div>
      </div>
    );
  }
}

export default App;
