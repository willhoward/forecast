import React, { Component } from 'react';
import Page from '../components/page';
import Field from '../components/field';
import Spacer from '../components/spacer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      target: '',
      loading: false,
      outlook: '',
    };
  }

  setTarget = value => {
    this.setState({ target: value });
  }

  render() {
    const { target, outlook } = this.state;

    return (
      <Page outlook={outlook}>
        <div className="flex stretch">
          <div className="space">
            <h1>Get an instant forecast for your website</h1>
            <p>Detect slow load times, errors and more</p>
            <Spacer size="medium" />
            <div className="flex">
              <div className="space">
                <Field id="target" label="Your website address" onChange={this.setTarget} />
              </div>
              <div className="item">
                <button className="square white" onChange={this.generateReport}>
                  <img src="icons/search.svg" alt="Go" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default App;
