import React, { Component } from "react"
import TemperatureInput from "./TemperatureInput"
import EfficiencyCalculator from "./EfficiencyCalculator"
import { Card, CardTitle, CardBody, CardText, Row, Col } from "reactstrap"

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = { highTemperature: "", lowTemperature: "" }
  }

  handleKelvinChange = (temperature, label) => {
    // If high, assign to high
    // If low, assign to low
    label === "High (TH)"
      ? this.setState({ highTemperature: temperature })
      : this.setState({ lowTemperature: temperature })
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
    const { highTemperature, lowTemperature } = this.state
    const THCelsius = this.tryConvert(highTemperature, this.toCelsius)
    const THFahrenheit = this.tryConvert(highTemperature, this.toFahrenheit)
    const TCCelsius = this.tryConvert(lowTemperature, this.toCelsius)
    const TCFahrenheit = this.tryConvert(lowTemperature, this.toFahrenheit)

    return (
      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>
                <h3>Enter temperature in Kelvin</h3>
              </CardTitle>
              <CardText>
                <TemperatureInput
                  label="High (TH)"
                  temperature={this.state.highTemperature}
                  onTemperatureChange={this.handleKelvinChange}
                />
                <TemperatureInput
                  temperature={this.state.lowTemperature}
                  label="Low (TC)"
                  onTemperatureChange={this.handleKelvinChange}
                />
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>
                <h3>Result Fahrenheit & Celcius</h3>
                <TemperatureInput
                  label="Celsius (TH)"
                  temperature={THCelsius}
                />
                <TemperatureInput
                  label="Fahrenheit (TH)"
                  temperature={THFahrenheit}
                />
                <TemperatureInput
                  label="Celsius (TC)"
                  temperature={TCCelsius}
                />
                <TemperatureInput
                  label="Fahrenheit (TC)"
                  temperature={TCFahrenheit}
                />
              </CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>
                <h3>Carnot Efficiency</h3>
              </CardTitle>
              <EfficiencyCalculator TH={highTemperature} TC={lowTemperature} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default Calculator
