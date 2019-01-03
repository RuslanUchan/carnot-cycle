import React, { Component } from "react"
import { Bar } from "react-chartjs-2"

class BarChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      chartData: {
        labels: ["Uchan", "Bangkai", "Gipari", "Tew", "Thor", "Abdul"],
        datasets: [
          {
            // label: "Top Global",
            data: [
              Math.floor(Math.random() * 100),
              Math.floor(Math.random() * 100),
              Math.floor(Math.random() * 100),
              Math.floor(Math.random() * 100),
              Math.floor(Math.random() * 100),
              Math.floor(Math.random() * 100)
            ],
            backgroundColor: [
              "#990000",
              "#87CEEB",
              "#8F00FF",
              "#FFC0CB",
              "#008080",
              "#FFD700"
            ],
            borderWidth: 1,
            borderColor: "#777",
            hoverBorderWidth: 3,
            hoverBorderColor: "#000"
          }
        ]
      }
    }
  }

  render() {
    return (
      <div style={{ position: "relative", width: 800, height: 750 }}>
        <Bar
          data={this.state.chartData}
          options={{
            responsive: true,
            title: {
              display: true,
              text: "Top Global",
              fontSize: 25
            },
            legend: {
              display: true,
              position: "right",
              labels: {
                fontColor: "#000"
              }
            },
            layout: {
              padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
              }
            },
            tooltips: {
              enabled: true
            }
          }}
        />
      </div>
    )
  }
}

export default BarChart
