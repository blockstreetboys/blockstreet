import React , { Component } from 'react';

class Shipped extends Component {
  constructor (props) {
    super(props);

    this.active = false;
    this.shipGoods = this.shipGoods.bind(this);
  }

  shipGoods (e) {
    e.preventDefault();
    if (this.props.currentStage === 2) {
      this.props.nextStage(this.props.currentStage + 1);
    }
  }

  render() {
    return (
      <div id="shipped" className='button_only'>
          <button onClick={this.shipGoods}
            className='button_static'>Ship Goods</button>
      </div>
    );
  }
}

export default Shipped;
