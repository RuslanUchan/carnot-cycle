import React, { Component } from "react"
import "./App.css"
import { Container, Button } from "reactstrap"

import Calculator from "./components/TemperatureCalculator"
import ScatterChart from "./components/ScatterChart"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <h1 style={{ marginBottom: "20px" }}>Carnot Cycle</h1>
        <Calculator />
        <Container style={{ marginTop: "10px" }}>
          <ScatterChart />
        </Container>
        <Button color="primary" onClick={this.handleVisualize} size="lg">
          Visualize
        </Button>
      </div>
    )
  }
}

export default App
