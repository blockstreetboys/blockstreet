import React , { Component } from 'react';

class Fund extends Component {
  constructor (props) {
    super(props);

    this.active = false;
    this.fundContract = this.fundContract.bind(this);
  }

  fundContract(e) {
    e.preventDefault();
    if (this.props.currentStage === 1) {
      this.props.nextStage(this.props.currentStage + 1);
    }
  }

  render() {
    return (
      <div id="fund" className="stage">
        <form className="form_container" onSubmit={this.fundContract}>
          <div className="button_container">
            <button className="button_input">Fund Contract</button>
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

export default Fund;
