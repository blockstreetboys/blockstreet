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
    if (this.state.currentStage === 1) {
      document.getElementById('fund').classList.add('active_stage');
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.globalProps.state);
  }

  fundContract(e) {
    e.preventDefault();
    if (this.state.currentStage === 1) {
      this.state.contract.pay(this.state.astronautAddress,
        this.state.balance, (err, res) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log(`PAYMENT SUCCESS`);
          console.log(res);
        });

      document.getElementById('fund').classList.remove('active_stage');
      this.setGlobalState('currentStage', this.state.currentStage + 1);
    }
  }

  handleChange(field) {
    return (e) => {
      this.setGlobalState(field, e.target.value);
    };
  }

  render() {
    return (
      <div id="fund" className="stage">
        <form className="form_container" onSubmit={this.fundContract}>
          <div className="button_container">
            <button className="button_input">Make Payment</button>
          </div>
          <div className="input_fields">
            <label>Payment
              <input onChange={this.handleChange('balance')}
                value={this.state.balance}/>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default Fund;
