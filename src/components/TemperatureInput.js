import React, { Component } from "react"

class TemperatureInput extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  handleChange = e => {
    this.props.onTemperatureChange(e.target.value, this.props.label)
  }

  render() {
    const temperature = this.props.temperature
    const label = this.props.label
    const disabled = label === "High (TH)" || label === "Low (TC)" ? false : true

    return (
      <fieldset>
        <legend>{label}:</legend>
        <input value={temperature} onChange={this.handleChange} disabled={disabled} />
      </fieldset>
    )
  }
}

export default TemperatureInput
