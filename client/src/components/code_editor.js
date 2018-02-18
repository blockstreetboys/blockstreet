import React, { Component } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/blackboard.css';
import 'codemirror/mode/javascript/javascript.js';

class CodeEditor extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(editor) {
    this.props.updateCodeState(editor.getValue());
  }

  componentDidMount() {
    const codeMirror = CodeMirror.fromTextArea(this.refs.editor, {
      mode: 'javascript',
      theme: 'blackboard',
      lineNumbers: true,

    });
    codeMirror.on('changes', this.handleChange);

  }
  render() {
    return (
      <textarea className={`code-editor ${this.props.type}-editor` +
      this.props.activeTab === "type" ? "" : "hidden" } ref="editor" />
    );
  }
}

export default CodeEditor;
