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
      <div className="button">
          Deploy your Contract!
      </div>
    )
  }
}

export default Deployment;
