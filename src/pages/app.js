import React, { Component } from 'react';
import axios from 'axios';
import Page from '../components/page';
import Field from '../components/field';
import Spacer from '../components/spacer';
import sanitise from '../utils/helpers';

class App extends Component {
  constructor() {
    super();

    this.state = {
      target: '',
      error: '',
      loading: false,
      outlook: '',
    };
  }

  setTarget = value => {
    this.setState({ target: value });
  };

  generateReport = async e => {
    e.preventDefault();
    const target = sanitise(this.state.target);
    if (target) {
      this.setState({ loading: true });
      axios.get('https://www.googleapis.com/pagespeedonline/v2/runPagespeed', {
        params: {
          url: target,
          locale: 'en_GB',
        },
      })
      .then(res => {
        console.log(res);
        this.setState({ loading: false });
      })
      .catch(err => this.setState({ loading: false, error: err.message }));
    }
  };

  render() {
    const { loading, outlook } = this.state;

    return (
      <Page outlook={loading ? 'tornado' : 'none'}>
        <div className="flex stretch">
          <div className="space">
            <h1>
              {loading ? 'Fetching your forecast...' : 'Get an instant forecast for your website'}
            </h1>
            <p>{loading ? 'This will take a moment' : 'Detect slow load times, errors and more'}</p>
            <Spacer size="medium" />
            {!loading &&
              <form onSubmit={this.generateReport}>
                <div className="flex">
                  <div className="space">
                    <Field id="target" label="Your website address" onChange={this.setTarget} />
                  </div>
                  <div className="item">
                    <button className="square white" type="submit">
                      <img src="icons/search.svg" alt="Go" />
                    </button>
                  </div>
                </div>
              </form>
            }
          </div>
        </div>
      </Page>
    );
  }
}

export default App;
