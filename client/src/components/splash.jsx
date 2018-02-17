import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSpaceman } from '../actions/module_actions';

const mapDispatchToProps = dispatch => {
  return ({
    getSpacemanData: () => dispatch(loadSpaceman())
  });
};

class SplashPage extends Component {
  constructor(props) {
    super(props);

    this.launchSpaceman = this.launchSpaceman.bind(this);
  }

  launchSpaceman(e) {
    this.props.getSpacemanData();
    this.props.history.push("/development");
    e.stopPropagation();
  }

  render() {
    return (
      <div>
        <h1>BLOCKSTREETBOYS</h1>
        <button onClick={this.launchSpaceman}>Get Started</button>
      </div>
    );
  }
}

export default connect(null,mapDispatchToProps)(SplashPage);
