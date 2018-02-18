import React , { Component } from 'react';
import DeployWeb3 from '../web3Api/deploy';
import { watchTransaction } from '../utilities/transactionPoll';

class Deploy extends Component {
  constructor (props) {
    super(props);

    this.state = this.props.state;
    this.deployContract = this.deployContract.bind(this);
  }

  componentDidMount() {
    if (this.state.currentStage === 0) {
      document.getElementById('deploy').classList.add('active_stage');
    }
  }

  deployContract(e) {
    e.preventDefault();
    if (this.state.currentStage === 0) {
      DeployWeb3(this.state.arbiterAddress, this.state.shipperAddress,
        this.state.astronautAddress,
        (err, receipt) => {
          if (err) {
            console.log(err);
            return;
          }
          watchTransaction(receipt).then(contractObject => {
            this.props.setAddress(contractObject);
          });
        });

      document.getElementById('deploy').classList.remove('active_stage');
      this.props.nextStage(this.state.currentStage + 1);
    }
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }
  // Add in another account for sender
  render() {
    return (
      <div id="deploy" className="stage deploy_stage">
        <form className="form_container" onSubmit={this.deployContract} >
          <div className="button_container">
            <button className='button_input'>Deploy Contract</button>
          </div>
          <div className='input_fields'>
            <label>Your Address
              <input onChange={this.handleChange('astronautAddress')}/>
            </label>
            <label>Alien Auto Parts Address
              <input onChange={this.handleChange('shipperAddress')}/>
            </label>
            <label>Arbiter Address
              <input onChange={this.handleChange('arbiterAddress')}/>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default Deploy;
