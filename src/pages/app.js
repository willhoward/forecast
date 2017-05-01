import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import Loading from '../components/loading';
import Target from '../components/target';
import Report from '../components/report';
import Page from '../components/page';
import sanitise from '../utils/helpers';

class App extends Component {
  constructor() {
    super();

    this.state = {
      target: '',
      error: '',
      loading: false,
      report: null,
      outlook: '',
    };
  }

  setTarget = value => {
    this.setState({ target: value });
  };

  resetTarget = () => {
    this.setState({ error: '', loading: false, report: null });
  };

  generateReport = async e => {
    e.preventDefault();
    const target = sanitise(this.state.target);
    if (target) {
      this.setState({ loading: true });
      axios
        .get('https://www.googleapis.com/pagespeedonline/v2/runPagespeed', {
          params: {
            url: target,
            locale: 'en_GB',
          },
        })
        .then(res => {
          this.setState({ target: '', loading: false, report: res.data });
        })
        .catch(err => this.setState({ loading: false, error: err.message }));
    }
  };

  render() {
    const { loading, report } = this.state;

    return (
      <Page loading={loading} report={report !== null}>
        {loading && <Loading />}
        {!loading && !report && <Target onChange={this.setTarget} onSubmit={this.generateReport} />}
        {!loading &&
          report &&
          <Report
            report={report}
            onChange={this.setTarget}
            onSubmit={this.generateReport}
            onReset={this.resetTarget}
          />
        }
      </Page>
    );
  }
}

export default withRouter(App);
