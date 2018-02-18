import React, { Component } from 'react';
import { runCode } from '../utilities/codeRunnerUtil';
import CodeButtons from './code_buttons';
import CodeEditor from './code_editor';
import CodeDisplay from './code_display';
import CodeTabs from './code_tabs';
import { connect } from 'react-redux';
import { updateCode } from '../actions/module_actions';

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
    const { currentModule, activeStage } = this.props;
    const stage = currentModule.stages[activeStage];
    const { code, testCases, language, languageVersion, testFramework } = stage;
    this.props.updateCode(this.state.script, this.props.activeStage);
    runCode({ code, testCases, language, languageVersion, testFramework }, this.ref);
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
           type="code"
           activeTab={this.props.activeTab}
           currentModule={stage}
           solutionBoolean={this.props.solutionBoolean}
           activeStage={this.props.activeStage}/>
        <CodeEditor
          mode={stage.mode}
          updateCompCodeState={this.updateCompCodeState}
          updateCode={this.props.updateCode}
          type="testCases"
          activeTab={this.props.activeTab}
          currentModule={stage}
          activeStage={this.props.activeStage}/>
        <CodeDisplay updateRef={this.updateRef} />
        <CodeButtons runTest={this.runTest}
                     activeStage={this.props.activeStage}/>
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Code);
