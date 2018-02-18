import React, { Component } from 'react';

class Completion extends Component {
  render() {
    return (
      <div className="completion">
        <p> You can download your application! </p>
        <div className="dev-button">
            Download Source Code in React Application
        </div>
        <div className="dev-button disabled">
            Download Source Code in Angular Application
        </div>
        <div className="dev-button disabled">
            Download Source Code in Vue Application
        </div>
      </div>
    )
  }
}

export default Completion;
