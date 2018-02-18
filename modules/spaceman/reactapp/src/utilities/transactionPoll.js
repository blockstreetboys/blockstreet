import web3 from '../web3Api/web3Config';

function _transactionTimeout(...args) {
    const [ hash, resolve, reject ] = args
    setTimeout(() => {
      web3.eth.getTransactionReceipt(hash, (err, receipt) => {
        if(err) {
          console.log('Failed to lookup receipt', err);
          _transactionTimeout(...args);
        }
        else if(!receipt) {
          // transaction receipt is not available for pending transactions
          _transactionTimeout(...args);
        }
        else {
          const { status } = receipt;
          if(+status === 0) {
            reject(receipt);
          }
          else {
            resolve(receipt);
          }
        }
      })
    }, 1000)
}

const hashes = {}

export const watchTransaction = (hash) => {
  if(hashes[hash]) return hashes[hash];
  hashes[hash] = new Promise((resolve, reject) => _transactionTimeout(hash, resolve, reject));
  return hashes[hash];
}
