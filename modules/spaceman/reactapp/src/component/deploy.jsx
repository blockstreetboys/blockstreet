import React, { Component } from 'react';
import deploy from '../web3Api/deploy';
import { watchTransaction } from '../utilities/transactionPoll';
import AstronautApi from '../web3Api/astronautApi';

class Deploy extends Component {
  constructor(props) {
    super(props);
    this.state = props.globalProps.state;
    this.setGlobalState = props.globalProps.setGlobalState;
    this.deployContract = this.deployContract.bind(this);
  }

  componentDidMount() {
    if (this.state.currentStage === "STAGE-0") {
      document.getElementById('deploy').classList.add('active_stage');
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.globalProps.state);
  }

  deployContract(e) {
    console.log("DEPLOYING...");
    e.preventDefault();
    if (this.state.currentStage === "STAGE-0") {
      deploy(this.state.arbiterAddress, this.state.shipperAddress,
        this.state.astronautAddress,
        (err, contract) => {
          if (err) {
            console.log(err);
            return;
          }
          return watchTransaction(contract.transactionHash)
            .then(contractObject => {
            this.setGlobalState('contract',
            new AstronautApi(contractObject.contractAddress));
            // Move on to next step
            document.getElementById('deploy').classList.remove('active_stage');
            this.setGlobalState('currentStage', "STAGE-1");
            console.log(`CONTRACT SUCCESSFULLY DEPLOYED AT
              ${contractObject.contractAddress}` );
          }).catch(error => console.log(error));
        });

    }
  }

  handleChange(field) {
    return (e) => {
      this.setGlobalState(field, e.target.value);
    };
  }

  render() {
    const coverClass = this.state.currentStage === "STAGE-0" ?
      "closed" : "open";

    return (
      <div id="deploy" className="stage">

        <div className={coverClass}>
        </div>

        <div className='stage-content'>

          <div className="stage-left">
            <button
              class="stage-button"
              onClick={this.deployContract}>
              Deploy Contract</button>
          </div>

          <div className="stage-mid">
          </div>

          <div className="stage-right">
            <label>
              <span>Astronaut Address</span>
              <input
                className="address input"
                placeholder="Enter address of buyer"
                onChange={this.handleChange('astronautAddress')}
                value={this.state.astronautAddress}/>
            </label>
            <label>
              <span>Alien Auto Parts Address</span>
              <input
                className="address input"
                placeholder="Enter address of seller"
                onChange={this.handleChange('shipperAddress')}
                value={this.state.shipperAddress}/>
            </label>
            <label>
              <span>Arbiter Address</span>
              <input
                className="address input"
                placeholder="Enter address of trusted third party"
                onChange={this.handleChange('arbiterAddress')}
                value={this.state.arbiterAddress}/>
            </label>
          </div>

        </div>
      </div>
    );
  }
}

export default Deploy;
