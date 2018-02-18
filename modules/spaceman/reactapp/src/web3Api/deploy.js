import web3 from './web3Config';
const data = require('./AstronautContract');
const {abi, bytecode} = data;
// debugger
const AstronautContract = web3.eth.contract(abi);

const deploy = (arbiterAddress, shipperAddress, astronautAddress, callback) => {
  AstronautContract.new(arbiterAddress, shipperAddress, {
    data: bytecode,
    from: astronautAddress,
    // gas: 0
  }, callback);
};

export default deploy;
