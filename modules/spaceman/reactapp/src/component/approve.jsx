import React , { Component } from 'react';

class Approve extends Component {
  approveFunds() {

  }

  render() {
    return (
      <div className='button_only'>
          <button className='button_static' onClick={this.approveFunds}>
            Approve Transaction
          </button>
      </div>
    );
  }
}

export default Approve;
