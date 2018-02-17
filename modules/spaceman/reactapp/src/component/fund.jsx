import React , { Component } from 'react';

class Fund extends Component {
  fundContract() {

  }

  render() {
    return (
      <div className="fund_contract">
        <form onSubmit={this.fundContract}>
          <button>Fund Contract</button>
          <label>Amount
            <input />
          </label>
        </form>
      </div>
    );
  }
}

export default Fund;
