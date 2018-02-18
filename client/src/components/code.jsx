import React, { Component } from 'react';
import { runCode } from '../utilities/codeRunnerUtil';
import CodeButtons from './code_buttons';
import CodeEditor from './code_editor';
import CodeDisplay from './code_display';
import CodeTabs from './code_tabs';

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
        <CodeEditor updateCodeState={this.updateCodeState}/>
        <CodeDisplay updateRef={this.updateRef}/>
        <CodeButtons runTest={this.runTest}/>
      </div>

    );
  }
}

export default Code;
