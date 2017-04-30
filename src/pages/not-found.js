import React from 'react';
import Page from '../components/page';

const NotFound = () => (
  <Page>
    <div className="flex stretch">
      <div className="space">
        <h1>We couldn&#8217;t find what you&#8217;re looking for</h1>
        <p>Click <a href="/">here</a> to head home</p>
      </div>
    </div>
  </Page>
);

export default NotFound;
