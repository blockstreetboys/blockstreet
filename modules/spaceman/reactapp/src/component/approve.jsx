import React , { Component } from 'react';

class Approve extends Component {
  constructor (props) {
    super(props);

    this.approveFunds = this.approveFunds.bind(this);
  }

  componentDidUpdate() {
    if (this.props.currentStage === 3) {
      document.getElementById('approve').classList.add('active_stage');
    }
  }

  approveFunds(e) {
    e.preventDefault();
    if (this.props.currentStage === 3) {
      document.getElementById('approve').classList.remove('active_stage');
      this.props.nextStage(this.props.currentStage + 1);
    }
  }

  render() {
    return (
      <div id="approve" className='stage'>
        <div className="form_container">
          <div className="button_container">
            <button className='button_static' onClick={this.approveFunds}>
              Approve Transaction
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Approve;
