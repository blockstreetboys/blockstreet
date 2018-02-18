import React, { Component } from 'react';
import MetaMask from './metamask';

class Deployment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deploy: false
    }
  }
  render() {
    if(!this.state.deploy) return <MetaMask done={() => this.setState({ deploy: true })}/>
    return (
      <div className="deployment">
        <p> You can deploy your contract to the test network </p>
        <div className="dev-button">
            Deploy my Contract
        </div>
      </div>
    )
  }
}

export default Deployment;
