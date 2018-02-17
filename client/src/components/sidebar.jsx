import React, { Component } from 'react';
import { connect } from 'react-redux';
import StageButton from './stage_button';

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.stages = [1,2,3,4];
  }

  render() {
    const stages = this.stages.map((stage)=>{
      return <StageButton key={stage} stage={stage}/>;
    });

    return (
      <div className='dev-sidebar'>
        <h1>Stages</h1>
        {stages}
      </div>

    );
  }
}

export default Sidebar;
