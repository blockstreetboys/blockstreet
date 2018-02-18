import React, { Component } from 'react';
import { connect } from 'react-redux';
import { switchTab } from '../actions/ui_actions';

const mapStateToProps = state => {
  return ({
    activeTab: state.ui.activeTab
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    switchTab: (tabName) => dispatch(switchTab(tabName))
  });
};

class CodeTabs extends Component {
  constructor(props) {
    super(props);

    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleSwitch(tabName) {
    return () => {
      if (this.props.activeTab !== tabName) {
        this.props.switchTab(tabName);
      }
    };
  }

  render() {
    return (
      <div className='dev-code-tabs'>
        <div className={this.props.activeTab === "code" ? "" : "inactive-tab"} onClick={this.handleSwitch("code")}>Script</div>
        <div className={this.props.activeTab === "testCases" ? "" : "inactive-tab"} onClick={this.handleSwitch("testCases")}>Tests</div>
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeTabs);
