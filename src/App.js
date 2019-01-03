import React, { Component } from "react"
import "./App.css"

import LineChart from "./components/LineChart"
import BarChart from "./components/BarChart"
import ScatterChart from "./components/ScatterChart"
import ScatterChartjs from "./components/ScatterChartjs"

class App extends Component {
  render() {
    return (
      <div className="App">
        <LineChart />
        <BarChart />
        <ScatterChart />
        <ScatterChartjs />
      </div>
    )
  }
}

export default App
