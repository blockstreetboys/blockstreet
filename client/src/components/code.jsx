import React, { Component } from 'react';
import CodeButtons from './code_buttons';
import CodeEditor from './code_editor';
import CodeDisplay from './code_display';

class Code extends Component {

  render() {
    return (
      <div className='dev-code'>
        <CodeEditor />
        <CodeDisplay />
        <CodeButtons />
      </div>

    );
  }
}

export default Code;
