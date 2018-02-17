import AstronautContract from './contract';

const deploy = (arbiterAddress, shipperAddress, astronautAddress) => {
  AstronautContract.new(arbiterAddress, shipperAddress, {
    from: astronautAddress
  });
  return new Promise(function(resolve, reject) {

      1000
  });
};
