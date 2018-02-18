import React, { Component } from 'react';
import { showSolution, updateCode } from '../actions/module_actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    showSolution: (activeStage) => dispatch(showSolution(activeStage)),
    updateCode: (code, activeStage) => dispatch(updateCode(code, activeStage))
  };
};

class CodeButtons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { showSolution, activeStage, updateCode } = this.props;
    return (
      <div className='dev-code-buttons'>
        <RunTestButton runTest={this.props.runTest}/>
        <div className='dev-sub-buttons'>
          <button className='dev-button' onClick={() => updateCode("", activeStage)}>Reset Code</button>
          <button className='dev-button' onClick={() => showSolution(activeStage)}>Show Solution</button>
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

export default connect(null, mapDispatchToProps)(CodeButtons);
