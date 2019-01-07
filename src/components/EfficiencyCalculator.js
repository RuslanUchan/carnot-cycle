import React, { Component } from "react"

class EfficiencyCalculator extends Component {
  render() {
    const { TH, TC } = this.props
    let efficiency = (1 - TC / TH) * 100
    return (
      <fieldset>
        {isNaN(efficiency) ? (
          <label>...</label>
        ) : (
          <label>
            <h4>{efficiency}%</h4>
          </label>
        )}
      </fieldset>
    )
  }
}

export default EfficiencyCalculator
