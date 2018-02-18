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

  withdrawFunds() {
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
    const coverClass = this.state.currentStage === "STAGE-4" ?
    "closed" : "open";

    return (
      <div className="stage">

        <div className={coverClass}>
        </div>

        <div id="withdraw" className='stage-content'>
          <div className="stage-left">
            <button
              className="stage-button"
              onClick={this.withdrawFunds}>
              Withdraw Funds</button>
          </div>

          <div className="stage-mid">
          </div>

          <div className="stage-right">
            <label>
              <span>Contract Balance</span>
              <input value={this.state.balance}/>
            </label>
          </div>
        </div>

      </div>
    );
  }
}

export default Withdraw;
