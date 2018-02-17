import React, { Component } from 'react';

class CodeButtons extends Component {

  render() {
    return (
      <div className='dev-code-buttons'>
        <RunTestButton />
        <div className='dev-sub-buttons'>
          <button className='dev-button'>Reset Code</button>
          <button className='dev-button'>Show Solution</button>
        </div>
      </div>
    );
  }
}

class RunTestButton extends Component {
  render() {
    return (
      <button id='run-test-button'>Run Test</button>
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
