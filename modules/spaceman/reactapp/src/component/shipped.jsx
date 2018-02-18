import React , { Component } from 'react';

class Shipped extends Component {
  constructor (props) {
    super(props);
    this.state = props.globalProps.state;
    this.setGlobalState = props.globalProps.setGlobalState;
    this.shipGoods = this.shipGoods.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.globalProps.state);
  }

  componentDidUpdate() {
    if (this.state.currentStage === "STAGE-2") {
      document.getElementById('shipped').classList.add('active_stage');
    }
  }

  shipGoods() {
    if (this.state.currentStage === "STAGE-2") {
      console.log("GOODS SHIPPED!");
      document.getElementById('shipped').classList.remove('active_stage');
      this.setGlobalState('currentStage', "STAGE-3");
    }
  }

  render() {
    const coverClass = this.state.currentStage === "STAGE-2" ?
    "closed" : "open";

    return (
      <div>

        <div className={coverClass}>
        </div>

        <div id="shipped" className="stage">
          <div className="stage-left">
            <button
              onClick={this.shipGoods}
              className='stage-button'>
              Ship Goods</button>
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

export default Shipped;
