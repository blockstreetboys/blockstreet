import React , { Component } from 'react';
// import Web3 from '../web3_api';

class Deploy extends Component {
  constructor (props) {
    super(props);

    this.active = true;
    this.deployContract = this.deployContract.bind(this);
  }

  deployContract(e) {
    e.preventDefault();
    if (this.props.currentStage === 0) {
      this.active = false;
      this.props.nextStage(this.props.currentStage + 1);
    }
  }

  render() {
    let stage;
    if (!this.active) {
      stage = document.getElementById('deploy');
      stage.style.background = "#202020";
    }
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
