import React , { Component } from 'react';
// import Web3 from '../web3_api';

class Deploy extends Component {
  constructor (props) {
    super(props);

    this.deployContract = this.deployContract.bind(this);
  }

  componentDidMount() {
    if (this.props.currentStage === 0) {
      document.getElementById('deploy').classList.add('active_stage');
    }
  }

  deployContract(e) {
    e.preventDefault();
    if (this.props.currentStage === 0) {
      document.getElementById('deploy').classList.remove('active_stage');
      this.props.nextStage(this.props.currentStage + 1);
    }
  }

  render() {
    return (
      <div id="deploy" className="stage deploy_stage">
        <form className="form_container" onSubmit={this.deployContract} >
          <div className="button_container">
            <button className='button_input'>Deploy Contract</button>
          </div>
          <div className='input_fields'>
            <label>Alien Auto Parts Address
              <input />
            </label>
            <label>Arbiter Address
              <input />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default Deploy;
