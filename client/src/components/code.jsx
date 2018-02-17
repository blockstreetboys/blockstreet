import React, { Component } from 'react';
import CodeButtons from './code_buttons';

class Code extends Component {

  render() {
    return (
      <div className='dev-code'>
        <main>
          im an embedded text editor
        </main>
        <CodeButtons />
      </div>

    );
  }
}

export default Code;
