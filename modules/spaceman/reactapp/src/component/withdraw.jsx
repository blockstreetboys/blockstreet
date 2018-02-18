import React , { Component } from 'react';

class Withdraw extends Component {
  constructor (props) {
    super(props);
    this.state = props.globalProps.state;
    this.setGlobalState = props.globalProps.setGlobalState;
    this.withdrawFunds = this.withdrawFunds.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.globalProps.state);
  }

  componentDidUpdate() {
    if (this.state.currentStage === "STAGE-4") {
      document.getElementById('withdraw').classList.add('active_stage');
    }
  }

  withdrawFunds(e) {
    e.preventDefault();
    if (this.state.currentStage === "STAGE-4") {
      this.state.contract.withdraw(this.state.shipperAddress, (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(`FUNDS WITHDRAWN`);
        console.log(res);
        document.getElementById('withdraw').classList.remove('active_stage');
        this.setGlobalState('currentStage', "COMPLETE");
        this.setGlobalState('balance', 0);
      });
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
            <label>Contract Balance
              <input value={this.state.balance}/>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default Withdraw;
