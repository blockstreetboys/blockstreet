import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const { stages } = state.modules.spaceman;
  return ({
    lastSolidityStage: stages[3], // TODO: hardcoded for now!
  });
};

// from https://stackoverflow.com/questions/1714786/query-string-encoding-of-a-javascript-object
function serialize(obj) {
  var str = [];
  for(var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

class Completion extends Component {
  constructor(props) {
    super(props);
    this.deploy = this.deploy.bind(this);
  }
  deploy() {
    const { lastSolidityStage } = this.props;
    let query = serialize({
      contract: lastSolidityStage.code,
      testCases: lastSolidityStage.testCases
    })
    window.open(`http://localhost:4049/api/zip?${query}`)
  }
  render() {
    return (
      <div className="completion">
        <p> You can download your application! </p>
        <div className="dev-button" onClick={this.deploy}>
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

export default connect(mapStateToProps)(Completion);
