import React , { Component } from 'react';

class Withdraw extends Component {
  withdrawFunds() {

  }

  render() {
    return (
      <div className="withdraw">
        <form onSubmit={this.withdrawFunds}>
          <button>Withdraw Funds</button>
          <label>Amount
            <input />
          </label>
        </form>
      </div>
    );
  }
}

export default Withdraw;
