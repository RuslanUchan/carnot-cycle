import React, { Component } from "react"
import { Scatter } from "react-chartjs-2"

class Chart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {
        datasets: [
          {
            label: "Scatter Dataset",
            data: [
              {
                x: -10,
                y: 0
              },
              {
                x: 3,
                y: 7
              },
              {
                x: 10,
                y: 5
              },
              {
                x: 1,
                y: 5
              },
              {
                x: 4.3,
                y: 3.7
              }
            ]
          }
        ]
      }
    }
  }

  render() {
    return (
      <div style={{ position: "relative", width: 800, height: 750 }}>
        <h3>Chart Samples</h3>
        <Scatter
          options={{
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
            scales: {
              xAxes: [
                {
                  type: "linear",
                  position: "bottom"
                }
              ]
            },
            tooltips: {
              enabled: true
            }
          }}
          data={this.state.data}
        />
      </div>
    )
  }
}

export default Chart
