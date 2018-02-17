import React, { Component } from 'react';
const crUrl =  'https://codecast.qualified.io/relay';

class CodeDisplay extends Component {

  // methods: {
  //   runCode({ code, tests }) {
  //     this.$refs.frame.contentWindow.postMessage({
  //       method: 'run',
  //       data: {
  //         language: 'javascript',
  //         languageVersion: '6.x',
  //         testFramework: 'mocha_bdd',
  //         fixture: `var assert = require('chai').assert; it('should be one', () => { assert.equal(a, 1) });`,
  //         code: 'var a = 1'
  //       }
  //     }, crUrl)
  //     let resolve;
  //     let reject;
  //     const promise = new Promise((_resolve, _reject) => {
  //       resolve = _resolve;
  //       reject = _reject;
  //     })
  //     const timeout = setTimeout(() => {
  //       const post = this.posts.pop();
  //       post.reject();
  //     }, 2000)
  //     this.posts.push({ promise, reject, resolve, timeout })
  //     return promise;
  //   }
  // },
  // mounted() {
  //   window.addEventListener('message', (event) => {
  //     const response = event.data;
  //     if (response && response.method) {
  //       const { method } = response;
  //       if (method === 'notifyReceipt') {
  //         const lastPost = this.posts[this.posts.length - 1];
  //         clearTimeout(lastPost.timeout);
  //       }
  //       if (method === 'notifyResponse') {
  //         //
  //         const { data } = response;
  //         const lastPost = this.posts.pop();
  //         lastPost.resolve(data);
  //       }
  //     }
  //   })
  // },
  render() {
    return (
      <iframe ref="frame" className="code-display" sandbox="allow-scripts allow-same-origin allow-pointer-lock" src={ crUrl }></iframe>
    );
  }
}

export default CodeDisplay;
