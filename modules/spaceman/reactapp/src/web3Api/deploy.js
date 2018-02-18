import web3 from './web3Config';
const data = require('./AstronautContract');
const {abi, bytecode} = data;
const AstronautContract = web3.eth.contract(abi);

const deploy = (arbiterAddress, shipperAddress, astronautAddress, callback) => {
  const contractData = AstronautContract.new.getData(arbiterAddress,
    shipperAddress, {data: bytecode});
    web3.eth.estimateGas({data: contractData}, (err, gas) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`GAS: ${gas}`);
    AstronautContract.new(arbiterAddress, shipperAddress, {
      data: bytecode,
      from: astronautAddress,
      gas: gas
    }, callback);
  });

};

export default deploy;
