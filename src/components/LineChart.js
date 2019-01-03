import React, { Component } from "react"
import { Line } from "react-chartjs-2"

class Chart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "Graph 1",
            backgroundColor: "#8F00FF",
            data: [4, 5, 1, 10, 32, 19, 17]
          },
          {
            label: "Graph 2",
            backgroundColor: "#87CEEB",
            data: [30, 9, 71, 102, 49, 5, 91]
          }
        ]
      }
    }
  }

  setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext("2d")
    const gradient = ctx.createLinearGradient(0, 0, 0, 400)
    gradient.addColorStop(0, color)
    gradient.addColorStop(0.95, "white")
    return gradient
  }

  getChartData = canvas => {
    const data = this.state.data
    if (data.datasets) {
      let colors = ["rgba(255, 0, 255, 0.75)", "rgba(0, 255, 0, 0.75)"]
      data.datasets.forEach((set, index) => {
        set.backgroundColor = this.setGradientColor(canvas, colors[index])
        set.borderColor = "blue"
        set.borderWidth = 2
      })
    }

    return data
  }

  render() {
    return (
      <div style={{ position: "relative", width: 800, height: 750 }}>
        <h3>Chart Samples</h3>
        <Line
          options={{
            responsive: true
          }}
          data={this.getChartData}
        />
      </div>
    )
  }
}

export default Chart
