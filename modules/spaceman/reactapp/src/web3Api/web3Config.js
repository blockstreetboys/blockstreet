const Web3 = require('web3');

const web3 = new Web3(
  new Web3.providers.HttpProvider("http://localhost:8545")
);

export default web3;
