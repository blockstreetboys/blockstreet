import React, { Component } from 'react';

class SplashPage extends Component {
  constructor(props) {
    super(props);

    this.launchSpaceman = this.launchSpaceman.bind(this);
  }

  launchSpaceman(e) {
    this.props.history.push("/tutorial");
    e.stopPropagation();
  }

  render() {
    return (
      <div className='splash'>
        <content>
          <h1>Welcome to <span>BLOCKSTREET</span></h1>
          <p>
            Blockstreet is an interactive environment for end to end
            development and testing of decentralized applications.
          </p>
          <div className='get-started'>
            <div>New to block chain development?</div>
            <button className='dev-button' onClick={this.launchSpaceman}>Get Started</button>
          </div>
        </content>
      </div>
    );
  }
}

export default SplashPage;
