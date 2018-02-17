import { abi, bytecode } from './AstronautContract';
import web3 from './web3config';

const AstronautContract = web3.eth.contract(abi);

const deploy = (arbiterAddress, shipperAddress, astronautAddress, callback) => {
  AstronautContract.new(arbiterAddress, shipperAddress, {
    data: bytecode,
    from: astronautAddress,
    gas: 0
  }, callback);
};

export default deploy;
