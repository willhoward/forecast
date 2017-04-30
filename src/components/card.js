import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, outlook }) => (
  <div className={`card ${outlook && 'outlook'}`}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  outlook: PropTypes.bool,
};

Card.defaultProps = {
  outlook: false,
};

export default Card;
