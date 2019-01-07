import React, { Component } from "react"
import TemperatureInput from "./TemperatureInput"
import { Container, Row, Col } from "reactstrap"

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = { temperature: "" }
  }

  handleKelvinChange = temperature => {
    this.setState({ temperature })
  }

  /**
   *  All temperature is converted into Kelvin. As kelvin is
   *  used to calculate thermodynamics equation.
   *  it's the international standard
   */
  toCelsius = kelvin => {
    return kelvin - 273
  }

  toFahrenheit = kelvin => {
    return (kelvin - 273) * 1.8 + 32
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
    const temperature = this.state.temperature
    const celsius = this.tryConvert(temperature, this.toCelsius)
    const fahrenheit = this.tryConvert(temperature, this.toFahrenheit)

    return (
      <div>
        <TemperatureInput
          temperature={this.state.temperature}
          onTemperatureChange={this.handleKelvinChange}
        />
        <TemperatureInput temperature={celsius} />
        <TemperatureInput temperature={fahrenheit} />
      </div>
    )
  }
}

export default Calculator
