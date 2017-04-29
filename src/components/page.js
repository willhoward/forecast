import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ outlook, children }) => (
  <div className={`page-background ${outlook}`}>
    <div className="page-content">
      {children}
    </div>
  </div>
);

Page.propTypes = {
  outlook: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Page;
