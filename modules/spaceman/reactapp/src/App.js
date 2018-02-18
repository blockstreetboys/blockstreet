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
    this.nextStage = this.nextStage.bind(this);
    this.setAddress = this.setAddress.bind(this);
  }

  componentDidMount() {
    this.setState({
      currentStage: 0,
      contract: null,
      arbiterAddress: web3.eth.accounts[1],
      shipperAddress: web3.eth.accounts[2],
      astronautAddress: web3.eth.accounts[0]
    });
  }

  nextStage (nextStage) {
    this.setState({currentStage: nextStage});
  }

  setAddress(contractObject) {
    debugger
    this.setState({contract: contractObject});
  }

  render() {
    if (this.state) {
      return (
        <div className="page_contents">
          <div className="spaceman">
            <Deploy state={this.state}
              nextStage={this.nextStage}
              setAddress={this.setAddress}/>
            <Fund currentStage={this.state.currentStage}
              nextStage={this.nextStage}/>
            <Shipped currentStage={this.state.currentStage}
              nextStage={this.nextStage}/>
            <Approve currentStage={this.state.currentStage}
              nextStage={this.nextStage}/>
            <Withdraw currentStage={this.state.currentStage}
              nextStage={this.nextStage}/>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;
