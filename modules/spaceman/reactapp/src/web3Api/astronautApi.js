import { abi, bytecode } from './AstronautContract';
import web3 from './web3Config';
const AstronautContract = web3.eth.contract(abi);

class AstronautApi {
  constructor(address) {
    this.address = address;
    this.instance = AstronautContract.at(address);
  }

  pay(astronautAddress, value, callback) {
    value = web3.toWei(value, 'ether');
    this.instance.pay.sendTransaction({
      from: astronautAddress,
      value: value
    },
    callback);
  }

  receive(arbiterAddress, callback) {
    this.instance.receive.sendTransaction({
      from: arbiterAddress
    },
    callback);
  }

  withdraw(shipperAddress, callback) {
    this.instance.withdraw.sendTransaction({
      from: shipperAddress
    },
    callback);
  }
}

export default AstronautApi;
