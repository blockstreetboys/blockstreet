import React , { Component } from 'react';

class Approve extends Component {
  constructor (props) {
    super(props);
    this.state = props.globalProps.state;
    this.setGlobalState = props.globalProps.setGlobalState;
    this.approveTransaction = this.approveTransaction.bind(this);
  }

  componentDidUpdate() {
    if (this.props.currentStage === 3) {
      document.getElementById('approve').classList.add('active_stage');
    }
  }

  approveTransaction(e) {
    e.preventDefault();
    if (this.props.currentStage === 3) {
      this.state.contract.receive(this.state.arbiterAddress, (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(`TRANSACTION APPROVED`);
        console.log(res);
        document.getElementById('approve').classList.remove('active_stage');
        this.setGlobalState('currentStage', this.state.currentStage + 1);
      });
    }
  }

  render() {
    return (
      <div id="approve" className='stage'>
        <div className="form_container">
          <div className="button_container">
            <button className='button_static' onClick={this.approveTransaction}>
              Approve Transaction
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Approve;
