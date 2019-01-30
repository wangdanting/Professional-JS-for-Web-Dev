import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Picker extends PureComponent {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  handleChange = e => {
    const { onChange } = this.props;
    onChange(e.target.value);
  };

  render() {
    const { value, options } = this.props;
    const optionFrg = options.map(option => (
      <option value={option} key={option}>
        {option}
      </option>
    ));
    return (
      <span>
        <h1>{value}</h1>
        <select value={value} onChange={this.handleChange}>
          {optionFrg}
        </select>
      </span>
    );
  }
}

export default Picker;
