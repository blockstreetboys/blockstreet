import React, { Component } from 'react';
import { runCode } from '../utilities/codeRunnerUtil';
import CodeButtons from './code_buttons';
import CodeEditor from './code_editor';
import CodeDisplay from './code_display';
import CodeTabs from './code_tabs';
import { connect } from 'react-router';

const mapStateToProps = state => {
  return ({
    activeTab: state.ui.activeTab
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
  }

  updateCodeState(code) {
    this.setState({code: code});
  }

  runTest () {
    runCode(this.state, this.ref);
  }

  updateRef(ref) {
    this.ref = ref;
  }

  render() {
    return (
      <div className='dev-code'>
        <CodeTabs />
        <CodeEditor
           updateCodeState={this.updateCodeState}
           type="script"
           activeTab={this.props.activeTab}/>
        <CodeEditor
          updateCodeState={this.updateCodeState}
          type="tests"
          activeTab={this.props.activeTab}/>
        <CodeDisplay updateRef={this.updateRef} />
        <CodeButtons runTest={this.runTest}/>
      </div>

    );
  }
}

export default Code;
