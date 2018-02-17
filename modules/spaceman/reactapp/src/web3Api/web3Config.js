const Web3 = require('web3');
const ganache = require('ganache-cli');
const provider = ganache.provider();

export const web3 = new Web3(provider);

export const getAccounts = () => {
  return web3.eth.getAccounts((error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    return result;
  });
};
