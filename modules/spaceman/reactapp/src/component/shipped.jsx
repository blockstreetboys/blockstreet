import React , { Component } from 'react';

class Shipped extends Component {
  constructor (props) {
    super(props);
    this.state = props.globalProps.state;
    this.setGlobalState = props.globalProps.setGlobalState;
    this.shipGoods = this.shipGoods.bind(this);
  }

  componentDidUpdate() {
    if (this.state.currentStage === 2) {
      document.getElementById('shipped').classList.add('active_stage');
    }
  }

  shipGoods(e) {
    e.preventDefault();
    if (this.state.currentStage === 2) {
      document.getElementById('shipped').classList.remove('active_stage');
      this.setGlobalState('currentStage', this.state.currentStage + 1);
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
