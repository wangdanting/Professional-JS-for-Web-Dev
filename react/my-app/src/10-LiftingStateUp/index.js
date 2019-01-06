import React, { PureComponent, Fragment } from "react";

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};

class TemperatureInput extends PureComponent {
  handleChange = e => {
    this.props.onTemperatureChange(e.target.value);
  };

  render() {
    const { scale, temperature } = this.props;
    return (
      <fieldset>
        <legend>在{scaleNames[scale]}:中输入温度数值</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class LiftingStateUp extends PureComponent {
  state = {
    temperature: "",
    scale: "c"
  };

  handleCelsiusChange = temperature => {
    this.setState({ scale: "c", temperature });
  };

  handleFahrenheitChange = temperature => {
    this.setState({ scale: "f", temperature });
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <Fragment>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
      </Fragment>
    );
  }
}

export default LiftingStateUp;
