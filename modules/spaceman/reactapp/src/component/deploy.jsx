import React , { Component } from 'react';
// import Web3 from '../web3_api';

class Deploy extends Component {
  deployContract() {
    // deploy contract to blockchain
    // on success set next component to active
  }

  render() {
    return (
      <div className="stage">
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
