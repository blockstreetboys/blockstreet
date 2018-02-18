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

  shipGoods(e) {
    e.preventDefault();
    if (this.state.currentStage === "STAGE-2") {
      console.log("GOODS SHIPPED!");
      document.getElementById('shipped').classList.remove('active_stage');
      this.setGlobalState('currentStage', "STAGE-3");
    }
  }

  render() {
    return (
      <div id="shipped" className='stage'>
        <div className="form_container">
          <div className="button_container">
            <button onClick={this.shipGoods}
              className='button_static'>Ship Goods</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Shipped;
