import React, { Component } from "react"
import TemperatureInput from "./TemperatureInput"
import { Card, CardTitle, CardBody, CardText } from "reactstrap"

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
      <Card>
        <CardBody>
          <CardTitle>
            <h3>Enter temperature in</h3>
          </CardTitle>
          <CardText>
            <TemperatureInput
              scale="k"
              temperature={this.state.temperature}
              onTemperatureChange={this.handleKelvinChange}
            />
            <TemperatureInput scale="c" temperature={celsius} />
            <TemperatureInput scale="f" temperature={fahrenheit} />
          </CardText>
        </CardBody>
      </Card>
    )
  }
}

export default Calculator
