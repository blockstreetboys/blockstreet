import { abi, bytecode } from './AstronautContract';
const web3 = require('TODO');
const AstronautContract = web3.eth.contract(abi);

class AstronautInstance {
  constructor(address) {
    this.instance = AstronautContract.at(address);
  }

  pay(astronautAddress, value, callback) {
    this.instance.pay.sendTransaction({
      from: astronautAddress,
      value: value
    },
    callback);
  }

  receive(arbiterAddress, callback) {
    this.instance.receive.send({
      from: arbiterAddress
    },
    callback);
  }

  withdraw(shipperAddress, callback) {
    this.instance.withdraw({
      from: shipperAddress
    },
    callback);
  }
}

export default AstronautInstance;
