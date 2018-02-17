import React , { Component } from 'react';

class Withdraw extends Component {
  withdrawFunds() {

  }

  render() {
    return (
      <div className="stage">
        <form className="form_container" onSubmit={this.withdrawFunds}>
          <div className="button_container">
            <button className="button_input">Withdraw Funds</button>
          </div>
          <div className="input_fields">
            <label>Amount
              <input />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default Withdraw;
