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

      if (method === 'notifyResponse') {
        const { data } = response;
        console.log(data);
        if(data.completed) {
          // we win!
        }
        else {
          // we don't
        }
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
