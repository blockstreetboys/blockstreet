import React, { Component } from 'react';
import Content from './content';
import Code from './code';

class Main extends Component {

  render() {
    return (
      <div className='dev-main'>
        <Content />
        <Code />
      </div>

    );
  }
}

export default Main;
