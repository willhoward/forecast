import React from 'react';
import PropTypes from 'prop-types';

const Spacer = ({ size }) => (
  <div className={`spacer ${size}`} />
);

Spacer.propTypes = {
  size: PropTypes.string,
};

Spacer.defaultProps = {
  size: 'medium',
};

export default Spacer;
