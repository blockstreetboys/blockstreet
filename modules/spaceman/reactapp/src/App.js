import React, { Component } from 'react';
import Deploy from './component/deploy';
import Fund from './component/fund';
import Shipped from './component/shipped';
import Approve from './component/approve';
import Withdraw from './component/withdraw';
import web3 from './web3Api/web3Config';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentStage: 0,
      contract: {},//SET THE ASTRONAUT API HERE
      balance: 0, 
      arbiterAddress: "",
      shipperAddress: "",
      astronautAddress: web3.eth.accounts[0]
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
      nextStage: this.nextStage
    }
    return (
      <div className="spaceman">
        <Deploy globalProps={globalProps}/>
        <Fund globalProps={globalProps}/>
        <Shipped
          state={this.state}
          currentStage={this.state.currentStage}
          nextStage={this.nextStage}/>
        <Approve 
          state={this.state}
          currentStage={this.state.currentStage}
          nextStage={this.nextStage}/>
        <Withdraw
          state={this.state}
          currentStage={this.state.currentStage}
          nextStage={this.nextStage}/>
      </div>
    );
  }
}

export default App;
