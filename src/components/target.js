import React from 'react';
import PropTypes from 'prop-types';
import Spacer from './spacer';
import Field from './field';

const Target = ({ onChange, onSubmit }) => (
  <div className="flex stretch">
    <div className="space">
      <h1>Get an instant forecast for your website</h1>
      <p>Detect slow load times, errors and more</p>
      <Spacer size="medium" />
      <form onSubmit={onSubmit}>
        <div className="flex">
          <div className="space">
            <Field id="target" label="Your website address" onChange={onChange} />
          </div>
          <div className="item">
            <button className="square" type="submit">
              <img src="icons/search.svg" alt="Go" />
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

Target.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Target;
