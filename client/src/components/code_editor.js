import React, { Component } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/blackboard.css';
import 'codemirror/mode/javascript/javascript.js';

class CodeEditor extends Component {
  componentDidMount() {
    CodeMirror.fromTextArea(this.refs.editor, {
      mode: 'javascript',
      theme: 'blackboard'
    });
  }
  render() {
    return (
      <textarea className='code-editor' ref="editor" />
    );
  }
}

export default CodeEditor;
