import React, { Component } from 'react';
import Deploy from './component/deploy';
import Fund from './component/fund';
import Shipped from './component/shipped';
import Approve from './component/approve';
import Withdraw from './component/withdraw';

class App extends Component {
  constructor (props) {
    super(props);
    this.nextStage = this.nextStage.bind(this);
  }

  componentDidMount() {
    this.setState({currentStage: 0});
  }

  nextStage (nextStage) {
    this.setState({currentStage: nextStage});
  }

  render() {
    if (this.state) {
      return (
        <div className="spaceman">
          <Deploy currentStage={this.state.currentStage}
             nextStage={this.nextStage}/>
          <Fund currentStage={this.state.currentStage}
             nextStage={this.nextStage}/>
          <Shipped currentStage={this.state.currentStage}
             nextStage={this.nextStage}/>
          <Approve currentStage={this.state.currentStage}
             nextStage={this.nextStage}/>
          <Withdraw currentStage={this.state.currentStage}
             nextStage={this.nextStage}/>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;
