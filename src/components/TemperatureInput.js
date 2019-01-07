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
    return (
      <fieldset>
        <legend>{label}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

export default TemperatureInput
