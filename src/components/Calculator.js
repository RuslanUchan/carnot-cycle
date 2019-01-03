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

  handleKelvinChange = temperature => {
    this.setState({ scale: "k", temperature })
  }

  toCelsius = fahrenheit => {
    return ((fahrenheit - 32) * 5) / 9
  }

  toFahrenheit = celsius => {
    return (celsius * 9) / 5 + 32
  }

  toKelvin = celsius => {
    return celsius + 273.0
  }

  tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) {
      return ""
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
  }

  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius =
      scale === "f" ? this.tryConvert(temperature, this.toCelsius) : temperature
    const fahrenheit =
      scale === "c"
        ? this.tryConvert(temperature, this.toFahrenheit)
        : temperature
    const kelvin =
      scale === "c" ? this.tryConvert(temperature, this.toKelvin) : temperature

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
        <TemperatureInput
          scale="k"
          temperature={kelvin}
          onTemperatureChange={this.handleKelvinChange}
        />
      </div>
    )
  }
}

export default Calculator
