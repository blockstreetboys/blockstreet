import { abi, bytecode } from './AstronautContract';
import web3 from './web3Config';
const AstronautContract = web3.eth.contract(abi);

class AstronautApi {
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

export default AstronautApi;
