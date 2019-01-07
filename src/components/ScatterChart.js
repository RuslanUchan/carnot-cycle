import React, { Component, Fragment } from "react"
import ReactApexChart from "react-apexcharts"
import { Button } from "reactstrap"

const initialSeries = [
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
      series: [...initialSeries]
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

    // Copy the series
    let series = [...this.state.series]

    // Initialize new array to merge state
    const seriesData = []

    series.forEach((obj, index) => {
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
    let series = [...initialSeries]

    if (this.props.isVisualized) {
      series = [...this.state.series]
    }

    return (
      <Fragment>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={series}
            type="scatter"
            height="350"
          />
        </div>
        <Button color="primary" onClick={this.props.handleVisualize} size="lg">
          Visualize
        </Button>
      </Fragment>
    )
  }
}

export default ScatterChart
