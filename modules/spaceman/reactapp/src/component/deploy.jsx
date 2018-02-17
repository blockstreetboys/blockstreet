import React , { Component } from 'react';
// import Web3 from '../web3_api';

class Deploy extends Component {
  deployContract() {

  }

  render() {
    return (
      <div className="deploy">
        <form onSubmit={this.deployContract}>
          <button>Deploy Contract</button>
          <label>Alien Auto Parts Address
            <input />
          </label>
          <label>Arbiter Address
            <input />
          </label>
        </form>
      </div>
    );
  }
}

export default Deploy;
