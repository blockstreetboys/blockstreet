import React, { Component } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/blackboard.css';
import 'codemirror/mode/javascript/javascript.js';

class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.value = "";

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(editor) {
    this.props.updateCodeState(editor.getValue());
  }

  componentDidMount() {
    let readOnly = false;

    if (this.props.type === "tests") {
      this.value = this.props.currentModule.testCases;
      this.readOnly = true;
    }

    this.codeMirror = CodeMirror.fromTextArea(this.refs.editor, {
      mode: 'javascript',
      theme: 'blackboard',
      lineNumbers: true,
      readOnly: readOnly
    });

    this.codeMirror.setValue(this.value);

    this.codeMirror.on('changes', this.handleChange);

  }

  componentWillReceiveProps (nextProps) {
    if (this.props.type === "tests" &&
    this.codeMirror !== undefined &&
    nextProps.currentModule.title !== this.props.currentModule.title) {
      this.value = nextProps.currentModule.testCases;
      this.codeMirror.setValue(this.value);
    }
  }

  render() {
    return (
      <div className={`code-editor ${this.props.type}-editor`
        .concat(this.props.activeTab === this.props.type ? " " : " hidden-editor")}>
      <textarea ref="editor" />
      </div>
    );
  }
}

export default CodeEditor;
