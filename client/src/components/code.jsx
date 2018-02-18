import React, { Component } from 'react';
import { runCode } from '../utilities/codeRunnerUtil';
import CodeButtons from './code_buttons';
import CodeEditor from './code_editor';
import CodeDisplay from './code_display';
import CodeTabs from './code_tabs';
import { connect } from 'react-redux';
import { updateCode } from '../actions/module_actions';
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
  return ({
    updateCode: (code, activeStage) => dispatch(updateCode(code, activeStage)),
    showSolution: () => dispatch(showSolution())

  });
};

class Code extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.ref = null;
    this.updateCompCodeState = this.updateCompCodeState.bind(this);
    this.runTest = this.runTest.bind(this);
    this.updateRef = this.updateRef.bind(this);
  }

  updateCompCodeState(code) {
    this.setState(code);
  }

  runTest () {
    const { script, tests } = this.state;
    const { currentModule, activeStage } = this.props;
    const stage = currentModule.stages[activeStage];
    const { language, languageVersion, testFramework } = stage;
    this.props.updateCode(this.state.script, this.props.activeStage);
    runCode({ script, tests, language, languageVersion, testFramework }, this.ref);
  }

  updateRef(ref) {
    this.ref = ref;
  }

  render() {
    const { currentModule, activeStage } = this.props;
    const stage = currentModule.stages[activeStage];
    return (
      <div className='dev-code'>
        <CodeTabs />
        <CodeEditor
           mode={stage.mode}
           updateCompCodeState={this.updateCompCodeState}
           updateCode={this.props.updateCode}
           type="script"
           activeTab={this.props.activeTab}
           currentModule={stage}
           solutionBoolean={this.props.solutionBoolean}
           showSolution={this.props.showSolution}
           activeStage={this.props.activeStage}/>
        <CodeEditor
          mode={stage.mode}
          updateCompCodeState={this.updateCompCodeState}
          updateCode={this.props.updateCode}
          type="tests"
          activeTab={this.props.activeTab}
          currentModule={stage}
          activeStage={this.props.activeStage}/>
        <CodeDisplay updateRef={this.updateRef} />
        <CodeButtons
          runTest={this.runTest}
          showSolution={this.props.showSolution}/>
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Code);
