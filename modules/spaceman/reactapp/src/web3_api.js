// Set compiled compiled smart contract assets
const abi = null;
const contractAddress = null;
// Import web3
const Web3 = require('web3');
// Set provider to injected MetaMask instance
web3 = new Web3(web3.currentProvider);
// Set first account to default
web3.eth.defaultAccount = web3.eth.accounts[0];
// Create an instance of the contract
const SpacemanContract = web3.eth.contract(abi);
// Set the specific contracts address
const Spaceman = SpacemanContract.at(address);


module.exports = App = {
  web3Provider: null,
  initWeb3: () => {
    App.web3Provider = web3.currentProvider;
    web3 = new Web3(App.web3Provider);
  },
  initContract: () => {

  },
};
