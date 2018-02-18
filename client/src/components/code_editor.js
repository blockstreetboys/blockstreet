import React, { Component } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/blackboard.css';
import 'codemirror/mode/javascript/javascript.js';
import '../utilities/solidityMode';
import { debounce } from '../utilities/generalUtil';
import { connect } from 'react-redux';

class CodeEditor extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.updateStoreCode = this.updateStoreCode.bind(this);
  }

  handleChange(type) {
    return (editor) => {
      this.props.updateCompCodeState({[type]: editor.getValue()});
    };
  }

  updateStoreCode(type) {
    if(type !== "testCases") {
      return debounce((editor)=>{
        this.props.updateCode(editor.getValue(), this.props.activeStage);
      }, 1000).bind(this);
    }
    return () => {}
  }

  componentDidMount() {
    let readOnly = false;

    const { type } = this.props;

    if (type === "testCases") {
      readOnly = true;
    }

    this.codeMirror = CodeMirror.fromTextArea(this.refs.editor, {
      mode: this.props.mode,
      theme: 'blackboard',
      lineNumbers: true,
      readOnly: readOnly
    });

    this.codeMirror.on('changes', this.handleChange(type));
    this.codeMirror.on('changes', this.updateStoreCode(type));
    this.props.updateCompCodeState({[type]: this.codeMirror.getValue()});

    this.codeMirror.setValue(this.props.currentModule[type] || "");
  }

  componentWillReceiveProps (nextProps) {
    const { type } = this.props;
    if(this.props.currentModule[type] !== nextProps.currentModule[type]) {
      this.codeMirror.setValue(nextProps.currentModule[type] || "");
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
