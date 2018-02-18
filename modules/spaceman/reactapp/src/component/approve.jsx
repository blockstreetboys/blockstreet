import React , { Component } from 'react';

class Approve extends Component {
  constructor (props) {
    super(props);
    this.state = props.globalProps.state;
    this.setGlobalState = props.globalProps.setGlobalState;
    this.approveTransaction = this.approveTransaction.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.globalProps.state);
  }

  componentDidUpdate() {
    if (this.state.currentStage === "STAGE-3") {
      document.getElementById('approve').classList.add('active_stage');
    }
  }

  approveTransaction() {
    if (this.state.currentStage === "STAGE-3") {
      this.state.contract.receive(this.state.arbiterAddress, (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(`TRANSACTION APPROVED`);
        console.log(res);
        document.getElementById('approve').classList.remove('active_stage');
        this.setGlobalState('currentStage', "STAGE-4");
      });
    }
  }

  render() {
    const coverClass = this.state.currentStage === "STAGE-3" ?
    "closed" : "open";

    return (
      <div className="stage">

        <div className={coverClass}>
        </div>

        <div id="approve" className='stage-content'>
          <div className="stage-left">
            <button
              className='stage-button'
              onClick={this.approveTransaction}>
              Approve Transaction
            </button>
          </div>

          <div className="stage-mid">
          </div>

          <div className="stage-right">
          </div>
        </div>

      </div>
    );
  }
}

export default Approve;
