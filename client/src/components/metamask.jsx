import React, { Component } from 'react';
import PollWeb3, { ERRORS } from '../utilities/PollWeb3';
const MetaMaskLogo = require('metamask-logo');

class MetaMask extends PollWeb3 {
  donePolling() {
    if(this.props.done) this.props.done();
  }
  render() {
    const { error } = this.state;
    if(error === ERRORS.MISSING_METAMASK) return <Install />
    if(error === ERRORS.NEED_TO_LOGIN) return <SignIn />
    if(error === ERRORS.SWITCH_NETWORK) return <SwitchNetwork />
    return null;
  }
}

class Fox extends Component {
  componentDidMount() {
    this.fox = MetaMaskLogo({
      pxNotRatio: false,
      width: 0.4,
      height: 0.4,
      followMouse: false,
      slowDrift: true,
    })
    this.refs.container.appendChild(this.fox.container);
  }
  componentWillUnmount() {
    this.fox.stopAnimation();
    this.refs.container.removeChild(this.fox.container);
  }
  render() {
    return <div ref="container"></div>
  }
}

class Install extends Component {
  render() {
    return (
      <div className="metamask-outer-container">
        <div className="metamask-container">
          <p className="instructions"> To deploy your Contract you&apos;ll need the MetaMask extension </p>
          <Fox />
          <p className="subInstructions"> Here&apos;s a link to the MetaMask Website </p>
          <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer" className="dev-button"> MetaMask Home </a>
        </div>
      </div>
    )
  }
}

class SignIn extends Component {
  render() {
    return (
      <div className="metamask-outer-container">
        <div className="metamask-container">
          <p className="instructions"> Looks like you&apos;re not signed into MetaMask </p>
          <Fox />
          <p className="subInstructions"> To deploy your contract sign in on your MetaMask extension</p>
        </div>
      </div>
    )
  }
}

class SwitchNetwork extends Component {
  render() {
    return (
      <div className="metamask-outer-container">
        <div className="metamask-container">
          <p className="instructions"> You are on the Main Ethereum Network </p>
          <Fox />
          <p className="subInstructions">
            Please switch to a test network to deploy your contract!
          </p>
        </div>
      </div>
    )
  }
}

export default MetaMask;
