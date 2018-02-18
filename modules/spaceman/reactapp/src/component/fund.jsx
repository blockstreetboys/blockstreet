import React , { Component } from 'react';

class Fund extends Component {
  constructor (props) {
    super(props);
    this.state = props.globalProps.state;
    this.setGlobalState = props.globalProps.setGlobalState;
    this.fundContract = this.fundContract.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate() {
    if (this.state.currentStage === "STAGE-1") {
      document.getElementById('fund').classList.add('active_stage');
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.globalProps.state);
  }

  fundContract() {
    if (this.state.currentStage === "STAGE-1") {
      this.state.contract.pay(this.state.astronautAddress,
        this.state.balance, (err, res) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log(`PAYMENT SUCCESS`);
          console.log(res);

          // Move to next stage
          document.getElementById('fund').classList.remove('active_stage');
          this.setGlobalState('currentStage', "STAGE-2");
          this.setGlobalState('balance', this.state.balance);
        });
    }
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    const coverClass = this.state.currentStage === "STAGE-1" ?
    "closed" : "open";

    return (
      <div  className="stage" className='stage'>
        <div className={coverClass}>
        </div>

        <div id="fund" className='stage-content'>
          <div className="stage-left">
            <button
              className="stage-button"
              onClick={this.fundContract}>
              Make Payment</button>
          </div>

          <div className="stage-mid">
          </div>

          <div className="stage-right">
            <label>
              <span>Payment (ether)</span>
              <input
                className="ether input"
                type="number"
                onChange={this.handleChange('balance')}
                value={this.state.balance}/>
            </label>
          </div>
        </div>

      </div>
    );
  }
}

export default Fund;
