import React, { Component } from 'react';
import { connect } from 'react-redux';
import StageButton from './stage_button';
import {
  showDevSidebar,
  hideDevSidebar,
  changeStage } from '../actions/ui_actions';

const mapStateToProps = state => {
  return {
    sidebarShown: state.ui.showDevSidebar,
    solidityStages: state.modules.spaceman.solidityStages,
    deploymentStage: state.modules.spaceman.deploymentStage,
    apiStage: state.modules.spaceman.apiStage,
    activeStage: state.ui.activeStage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showDevSidebar: () => dispatch(showDevSidebar()),
    hideDevSidebar: () => dispatch(hideDevSidebar()),
    changeStage: (stageNumber) => dispatch(changeStage(stageNumber)),
  };
};

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    console.log('toggling');
    if (this.props.sidebarShown) {
      this.props.hideDevSidebar();
    } else {
      this.props.showDevSidebar();
    }
  }

  render() {
    const contentClasses = ["dev-sidebar-content animated"];
    if (this.props.sidebarShown !== true) {
      contentClasses.push("hide-sidebar");
      contentClasses.push("fadeOutLeft");
    }

    const sidebarClasses = ["dev-sidebar animated fadeInLeft"];
    if (this.props.sidebarShown !== true) {
      // sidebarClasses.push("hidden-sidebar");
    }

    const { solidityStages, deploymentStage, apiStage } = this.props;

    const stageButtons = [...solidityStages, deploymentStage, apiStage].map((stage, idx)=>{
      return <StageButton
        key={idx}
        idx={idx}
        stage={stage}
        changeStage={this.props.changeStage}
        activeStage={this.props.activeStage}/>;
    });

    return (
      <div className={sidebarClasses.join(" ")}>
        <div className={contentClasses.join(" ")}>
          <h1>Stages</h1>
          {stageButtons}
        </div>
        <div
          className='dev-sidebar-handle'
          onClick={this.toggleSidebar}>
          <div id="sidebar-knob"></div>
        </div>
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
