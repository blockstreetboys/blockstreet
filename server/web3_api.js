const Web3 = require('web3');
web3 = new Web3(web3.currentProvider);

const AstronautPurchaseContract = web3.eth.contract(abi);
const AstronautPurchase = AstronautPurchase.at(contractAddress);

module.exports = App = {
  web3Provider: null,
  initWeb3: () => {
    App.web3Provider = web3.currentProvider;
    web3 = new Web3(App.web3Provider);
  },
  initContract: () => {

  },
};
