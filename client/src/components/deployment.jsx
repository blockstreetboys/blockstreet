import React, { Component } from 'react';
import MetaMask from './metamask';
import { connect } from 'react-redux';
import web3 from '../utilities/web3Config';

const mapStateToProps = state => {
  const { activeStage } = state.ui;
  const { stages } = state.modules.spaceman;
  return ({
    lastSolidityStage: stages[activeStage - 2], // TODO: hardcoded for now!
    currentStage: stages[activeStage],
  });
};

class Deployment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deploy: false
    }
    this.deploy = this.deploy.bind(this);
  }
  deploy() {

    console.log('hey', this.props.lastSolidityStage)
  }
  render() {
    if(!this.state.deploy) return <MetaMask done={() => this.setState({ deploy: true })}/>
    return (
      <div className="deployment">
        <p> You can deploy your contract to the test network </p>
        <div className="dev-button" onClick={this.deploy}>
            Deploy my Contract
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Deployment);
