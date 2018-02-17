import React , { Component } from 'react';

class Withdraw extends Component {
  constructor (props) {
    super(props);

    this.withdrawFunds = this.withdrawFunds.bind(this);
  }

  componentDidUpdate() {
    if (this.props.currentStage === 4) {
      document.getElementById('withdraw').classList.add('active_stage');
    }
  }

  withdrawFunds(e) {
    e.preventDefault();
    if (this.props.currentStage === 4) {
      document.getElementById('withdraw').classList.remove('active_stage');
      this.props.nextStage(this.props.currentStage + 1);
    }
  }

  render() {
    return (
      <div id="withdraw" className="stage withdraw_stage">
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
