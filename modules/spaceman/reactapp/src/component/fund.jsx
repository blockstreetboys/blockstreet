import React , { Component } from 'react';

class Fund extends Component {
  fundContract() {

  }

  render() {
    return (
      <div className="stage">
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
