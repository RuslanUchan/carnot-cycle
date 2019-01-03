import React, { Component } from "react"
import "./App.css"

import Calculator from "./components/Calculator"
import ScatterChart from "./components/ScatterChart"

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      scaleNames: {
        c: 'Celsius',
        f: 'Fahrenheit'
      }
    }
  }
  
  render() {
    return (
      <div className="App">
        <Calculator />
        <ScatterChart />
      </div>
    )
  }
}

export default App
