import React, { Component } from "react"
import TemperatureInput from "./TemperatureInput"

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = { temperature: "", scale: "c" }
  }

  handleCelsiusChange = temperature => {
    this.setState({ scale: "c", temperature })
  }

  handleFahrenheitChange = temperature => {
    this.setState({ scale: "f", temperature })
  }

  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius =
      scale === "f"
        ? this.props.tryConvert(temperature, this.props.toCelsius)
        : temperature
    const fahrenheit =
      scale === "c"
        ? this.props.tryConvert(temperature, this.props.toFahrenheit)
        : temperature

    return (
      <div>
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
      </div>
    )
  }
}

export default Calculator
