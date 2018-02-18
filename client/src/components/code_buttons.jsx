import React, { Component } from 'react';

class CodeButtons extends Component {
  constructor(props) {
    super(props);

    this.resetCode = this.resetCode.bind(this);
    this.showSolution = this.showSolution.bind(this);
  }

  resetCode() {

  }

  showSolution() {

  }

  render() {
    return (
      <div className='dev-code-buttons'>
        <RunTestButton runTest={this.props.runTest}/>
        <div className='dev-sub-buttons'>
          <button className='dev-button' onClick={this.resetCode}>Reset Code</button>
          <button className='dev-button' onClick={this.showSolution}>Show Solution</button>
        </div>
      </div>
    );
  }
}

class RunTestButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.runTest(e);
  }

  render() {
    return (
      <button id='run-test-button' onClick={this.handleClick}>Run Test</button>
    );
  }
}

class ContinueButton extends Component {
  render() {
    return (
      <button id='continue-button'>Continue</button>
    );
  }
}

export default CodeButtons;
