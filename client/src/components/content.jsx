import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const activeStage = state.ui.activeStage;
  let content = "";

  if (state.modules.spaceman.stages[activeStage]) {
    content = state.modules.spaceman.stages[activeStage].instructions;
  }

  return ({
    content
  });
};

const mapDispatchToProps = (dispatch) => {
  return(null);
};


class Content extends Component {

  render() {
    const input = this.props.content;

    return (
      <div className='dev-content'>
        <ReactMarkdown source={input} />
      </div>

    );
  }
}

export default connect(mapStateToProps, null)(Content);
