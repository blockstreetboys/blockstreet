import React, { Component } from 'react';

class StageButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.changeStage(this.props.idx);
    this.props.showSolution();
  }

  render() {
    const stageClasses = ['dev-stage-button'];
    if (this.props.activeStage === this.props.idx) {
      stageClasses.push('dev-stage-active');
    }

    return (
      <div className={stageClasses.join(" ")} onClick={this.handleClick}>
        {this.props.stage.title}
      </div>

    );
  }
}

export default StageButton;
