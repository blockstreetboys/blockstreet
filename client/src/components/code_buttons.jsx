import React, { Component } from 'react';

class CodeButtons extends Component {

  render() {
    return (
      <div className='dev-code-buttons'>
        <RunTestButton runTest={this.props.runTest}/>
        <div className='dev-sub-buttons'>
          <button className='dev-button'>Reset Code</button>
          <button className='dev-button'>Show Solution</button>
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
