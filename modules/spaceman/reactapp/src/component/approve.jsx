import React , { Component } from 'react';

class Approve extends Component {
  approveFunds() {

  }

  render() {
    return (
      <div className='approve'>
          <button onClick={this.approveFunds}>
            Approve Transaction
          </button>
      </div>
    );
  }
}

export default Approve;
