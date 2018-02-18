import React , { Component } from 'react';
import deployContract from '../web3Api/deploy';
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
    e.preventDefault();
    if (this.state.currentStage === "STAGE-0") {
      deployContract(this.state.arbiterAddress, this.state.shipperAddress,
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
    return (
      <div id="deploy" className="stage deploy_stage">
        <form className="form_container" onSubmit={this.deployContract} >
          <div className="button_container">
            <button className='button_input'>Deploy Contract</button>
          </div>
          <div className='input_fields'>
            <label>Your Address</label>
              <input onChange={this.handleChange('astronautAddress')}
                value={this.state.astronautAddress}/>
            <label>Alien Auto Parts Address
            </label>
              <input onChange={this.handleChange('shipperAddress')}
                value={this.state.shipperAddress}/>
            <label>Arbiter Address
            </label>
              <input onChange={this.handleChange('arbiterAddress')}
                value={this.state.arbiterAddress}/>
          </div>
        </form>
      </div>
    );
  }
}

export default Deploy;
