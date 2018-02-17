import React, { Component } from 'react';

class StageButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("doing stuff");
  }

  render() {
    return (
      <div className='dev-stage-button' onClick={this.handleClick}>
        stageButton
      </div>

    );
  }
}

export default StageButton;
