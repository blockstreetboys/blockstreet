import React, { Component } from 'react';
const crUrl =  'https://codecast.qualified.io/relay';


class CodeDisplay extends Component {
  constructor(props) {
    super(props);
    this.handleMessage = this.handleMessage.bind(this);
  }


  handleMessage (e) {
    const response = e.data;
    if (response && response.method) {
      const { method } = response;

      if (method === 'notifyReceipt') {
      //   const lastPost = this.posts[this.posts.length - 1];
      //   clearTimeout(lastPost.timeout);
        console.log('you have no internet connection');
      }
      if (method === 'notifyResponse') {
        const { data } = response;
      //   const lastPost = this.posts.pop();
      //   lastPost.resolve(data);
        console.log(data);
      }
    }
  }

  componentDidMount() {
    window.addEventListener('message', this.handleMessage);
    this.props.updateRef(this.refs.frame);
  }

  render() {
    return (
      <iframe ref="frame" className="code-display" sandbox="allow-scripts allow-same-origin allow-pointer-lock" src={ crUrl }></iframe>
    );
  }
}

export default CodeDisplay;
