import React, { Component } from 'react';
import PollWeb3, { ERRORS } from './utilities/PollWeb3';
const MetamaskLogo = require('metamask-logo');

class Metamask extends PollWeb3 {
  donePolling() {
    // bryan this is where we will continue
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
    this.fox = MetamaskLogo({
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
          <p className="instructions"> To create a Capsule you&apos;ll <br />need the MetaMask extension </p>
          <Fox />
          <p className="subInstructions"> Here&apos;s a link to the <br />MetaMask Website </p>
          <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer" className="button blue"> MetaMask Home </a>
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
          <p className="instructions"> It looks like you&apos;re not <br />signed into MetaMask </p>
          <Fox />
          <p className="subInstructions"> Most likely you just need to sign<br /> in on your MetaMask extension</p>
          <a href="https://github.com/MetaMask/faq" target="_blank" rel="noopener noreferrer" className="button blue"> MetaMask FAQs </a>
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
          <p className="instructions"> You are not on the <br />Main Ethereum Network </p>
          <Fox />
          <p className="subInstructions">
            Most likely you just need to switch to <br />the main network on your MetaMask extension
          </p>
          <a href="https://github.com/MetaMask/faq" target="_blank" rel="noopener noreferrer" className="button blue"> MetaMask FAQs </a>
        </div>
      </div>
    )
  }
}

export default Metamask;
