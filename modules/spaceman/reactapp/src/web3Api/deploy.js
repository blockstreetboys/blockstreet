import { abi, bytecode } from './AstronautContract';
const web3 = require('TODO');

const AstronautContract = web3.eth.contract(abi);
let AstronautInstance;

const deploy = (arbiterAddress, shipperAddress, astronautAddress, callback) => {
  AstronautContract.new(arbiterAddress, shipperAddress, {
    data: bytecode,
    from: astronautAddress,
    gas: 0
  }, callback);
};
