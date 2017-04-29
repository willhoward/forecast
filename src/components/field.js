import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Field extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    error: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    value: '',
    error: '',
    label: '',
    onChange: () => '',
  };

  constructor(props) {
    super(props);

    this.state = {
      active: false,
      value: props.value || '',
      error: props.error || '',
      label: props.label || 'Label',
    };
  }

  changeValue = e => {
    const value = e.target.value;
    this.setState({ value, error: '' });
    return this.props.onChange(value);
  };

  render() {
    const { active, value, error, label } = this.state;
    const { id } = this.props;
    const fieldClassName = `field ${(active || value) && 'active'}`;

    return (
      <div className={fieldClassName}>
        <input
          id={id}
          type="text"
          value={value}
          placeholder={label}
          onChange={this.changeValue}
          onKeyPress={this.handleKeyPress}
          onFocus={() => this.setState({ active: true })}
          onBlur={() => this.setState({ active: false })}
          autoComplete="new-password"
        />
        <label htmlFor={id} className={error && 'error'}>
          {error || label}
        </label>
      </div>
    );
  }
}

export default Field;
