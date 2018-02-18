import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const { stages } = state.modules.spaceman;
  return ({
    lastSolidityStage: stages[3], // TODO: hardcoded for now!
  });
};

class Completion extends Component {
  constructor(props) {
    super(props);
    this.deploy = this.deploy.bind(this);
  }
  deploy() {
    const { lastSolidityStage } = this.props;
  }
  render() {
    return (
      <div className="completion">
        <p> You can download your application! </p>
        <div className="dev-button">
            Download Source Code in React Application
        </div>
        <div className="dev-button disabled">
            Download Source Code in Angular Application
        </div>
        <div className="dev-button disabled">
            Download Source Code in Vue Application
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Completion);
