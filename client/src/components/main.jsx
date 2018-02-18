import React, { Component } from 'react';
import Content from './content';
import Code from './code';
import Deployment from './deployment';
import Completion from './completion';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return ({
    currentModule: state.modules.spaceman,
    activeStage: state.ui.activeStage
  });
};

class Main extends Component {
  renderRightSection() {
    const { currentModule, activeStage } = this.props;
    const stage = currentModule.stages[activeStage];
    if (!stage) return null;
    if(stage.type === 'code') return <Code />
    if(stage.type === 'deployment') return <Deployment />
    if(stage.type === 'completion') return <Completion />
    return null;
  }
  render() {
    return (
      <div className='dev-main'>
        <Content />
        { this.renderRightSection() }
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);
