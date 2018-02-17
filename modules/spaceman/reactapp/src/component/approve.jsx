import React , { Component } from 'react';

class Approve extends Component {
  constructor (props) {
    super(props);

    this.active = false;
    this.approveFunds = this.approveFunds.bind(this);
  }

  approveFunds(e) {
    e.preventDefault();
    if (this.props.currentStage === 3) {
      this.props.nextStage(this.props.currentStage + 1);
    }
  }

  render() {
    return (
      <div id="approve" className='button_only'>
          <button className='button_static' onClick={this.approveFunds}>
            Approve Transaction
          </button>
      </div>
    );
  }
}

export default Approve;
