import React, { Component } from "react"
import "./App.css"

import Calculator from "./components/Calculator"
import ScatterChart from "./components/ScatterChart"
import Reactstrap from "./components/Reactstrap"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scaleNames: {
        c: "Celsius",
        f: "Fahrenheit"
      }
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Carnot Cycle</h1>
        <Calculator />
        <ScatterChart />
        <Reactstrap />
      </div>
    )
  }
}

export default App
