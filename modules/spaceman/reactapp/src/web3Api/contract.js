// Set compiled compiled smart contract assets
const abi = null;
const Web3 = require('web3');
web3 = new Web3(web3.currentProvider);
web3.eth.defaultAccount = web3.eth.accounts[0];
const AstronautContract = web3.eth.contract(abi);

export default = AstronautContract;
