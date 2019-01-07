import React, { Component } from "react"
import ReactApexChart from "react-apexcharts"

class ScatterChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        chart: {
          zoom: {
            enabled: true,
            type: "xy"
          }
        },
        xaxis: {
          tickAmount: 10
        },
        yaxis: {
          tickAmount: 10
        }
      },
      series: [
        {
          name: "Isothermal Expansion",
          data: []
        },
        {
          name: "Isentrophic Expansion",
          data: []
        },
        {
          name: "Isothermal Compression",
          data: []
        },
        {
          name: "Isentrophic Compression",
          data: []
        }
      ]
    }
  }

  componentWillMount = () => {
    // Unpack all props
    const {
      initialVolume,
      initialPressure,
      modifier
    } = this.props.systemVariables
    const PVDiagramModifier = this.props.PVDiagramModifier

    // Initialize new array to merge state
    const seriesData = []

    this.state.series.forEach((obj, index) => {
      let data = PVDiagramModifier(
        initialVolume[index],
        initialPressure[index],
        modifier[index][0],
        modifier[index][1]
      )

      seriesData.push({ name: obj.name, data: data })
    })

    this.setState({ series: seriesData })
  }

  render() {
    return (
      <div id="chart">
        {console.log(this.state.series)}
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="scatter"
          height="350"
        />
      </div>
    )
  }
}

export default ScatterChart
