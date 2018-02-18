import React, { Component } from 'react';
import { runCode } from '../utilities/codeRunnerUtil';
import CodeButtons from './code_buttons';
import CodeEditor from './code_editor';
import CodeDisplay from './code_display';
import CodeTabs from './code_tabs';
import { connect } from 'react-redux';
import { showSolution } from '../actions/ui_actions';

const mapStateToProps = state => {
  return ({
    activeTab: state.ui.activeTab,
    currentModule: state.modules.spaceman,
    activeStage: state.ui.activeStage,
    solutionBoolean: state.ui.solutionBoolean
  });
};

const mapDispatchToProps = dispatch => {
  return({
    showSolution: () => dispatch(showSolution())
  });
};


class Code extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.ref = null;
    this.updateCodeState = this.updateCodeState.bind(this);
    this.runTest = this.runTest.bind(this);
    this.updateRef = this.updateRef.bind(this);
    this.showSolution = this.showSolution.bind(this);
  }

  updateCodeState(code) {
    this.setState(code);
  }

  runTest () {
    runCode(this.state, this.ref);
  }

  updateRef(ref) {
    this.ref = ref;
  }

  showSolution() {
    this.props.showSolution();
  }

  render() {
    return (
      <div className='dev-code'>
        <CodeTabs />
        <CodeEditor
           updateCodeState={this.updateCodeState}
           type="script"
           activeTab={this.props.activeTab}
           currentModule={this.props.currentModule.solidityStages[this.props.activeStage]}
           solutionBoolean={this.props.solutionBoolean}
           showSolution={this.props.showSolution}/>
        <CodeEditor
          updateCodeState={this.updateCodeState}
          type="tests"
          activeTab={this.props.activeTab}
          currentModule={this.props.currentModule.solidityStages[this.props.activeStage]}/>
        <CodeDisplay updateRef={this.updateRef} />
        <CodeButtons
          runTest={this.runTest}
          showSolution={this.showSolution}/>
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Code);
