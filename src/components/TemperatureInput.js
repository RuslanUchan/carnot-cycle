import React, { Component } from "react"

class TemperatureInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scaleNames: {
        c: "Celsius",
        f: "Fahrenheit",
        k: "Kelvin"
      }
    }
  }

  handleChange = e => {
    this.props.onTemperatureChange(e.target.value)
  }

  render() {
    const temperature = this.props.temperature
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>{this.state.scaleNames[scale]}:</legend>
        {this.props.scale !== "k" ? (
          <input
            style={{ color: "black", borderRadius: 5 }}
            disabled
            value={temperature}
            onChange={this.handleChange}
          />
        ) : (
          <input value={temperature} onChange={this.handleChange} />
        )}
      </fieldset>
    )
  }
}

export default TemperatureInput
