import React, { Component } from "react"
import "./App.css"
import { Container } from "reactstrap"

import Calculator from "./components/TemperatureCalculator"
import ScatterChart from "./components/ScatterChart"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      initialVolume: [2, 8, 9, 3],
      initialPressure: [8, 6, 2, 4],
      modifier: [[1.2, -0.4], [0.2, -0.8], [-1.2, 0.4], [-0.2, 0.8]],
      isVisualized: false
    }
  }

  PVDiagramModifier = (x, y, xMod, yMod) => {
    const seriesData = [[x, y]]

    for (let i = 0; i < 5; i++) {
      x += xMod
      y += yMod

      seriesData.push([x, y])
    }

    return seriesData
  }

  handleVisualize = () => {
    this.setState({ isVisualized: !this.state.isVisualized })
  }
  

  render() {
    return (
      <div className="App">
        <h1 style={{ marginBottom: "20px" }}>Carnot Cycle</h1>
        <Calculator />
        <Container style={{ marginTop: "10px" }}>
          <ScatterChart
            isVisualized={this.state.isVisualized}
            PVDiagramModifier={this.PVDiagramModifier}
            systemVariables={this.state}
            handleVisualize={this.handleVisualize}
          />
        </Container>
      </div>
    )
  }
}

export default App
