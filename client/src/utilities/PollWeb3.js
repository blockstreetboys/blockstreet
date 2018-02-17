import web3 from './web3';
import { networkId } from './config';
import { Component } from 'react';

export const ERRORS = {
  MISSING_METAMASK: 0,
  NEED_TO_LOGIN: 1,
  SWITCH_NETWORK: 2
}

class PollWeb3 extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      polling: true,
    }
  }
  componentDidMount() {
    this.checkStepLoop();
  }
  checkStepLoop() {
    if(this.state.polling) {
      this.checkStep();
      setTimeout(() => this.checkStepLoop(), 1000);
    }
  }
  checkStep() {
    if(!window.web3) {
      this.setState({ error: ERRORS.MISSING_METAMASK });
      return;
    }

    web3.eth.getAccounts((err, accounts) => {
      if(accounts.length === 0) {
        this.setState({ error: ERRORS.NEED_TO_LOGIN });
      }
      else if(networkId && web3.version.network !== networkId) {
        this.setState({ error: ERRORS.SWITCH_NETWORK });
      }
      else if(this.state.polling) {
        this.setState({ error: null, polling: false });
        if(this.donePolling) this.donePolling();
      }
    })
  }
}

export default PollWeb3;
