import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Content extends Component {


  render() {
    const input = '# This is a header\n\nAnd this is a paragraph';

    return (
      <div className='dev-content'>
        <ReactMarkdown source={input} />
      </div>

    );
  }
}

export default Content;
