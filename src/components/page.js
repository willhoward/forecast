import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ loading, report, children }) => (
  <div className="page-background">
    <div className={`page-content ${loading && 'loading'} ${report && 'report'}`}>
      {children}
    </div>
  </div>
);

Page.propTypes = {
  loading: PropTypes.bool,
  report: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Page.defaultProps = {
  loading: false,
  report: false,
};

export default Page;
