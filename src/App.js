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
  
  toCelsius = fahrenheit => {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  toFahrenheit = celsius => {
    return (celsius * 9 / 5) + 32;
  }
  
  tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
  
  /* 
  BoilingVerdict = props => {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  } */
 
  render() {
    return (
      <div className="App">
        <Calculator 
          toCelsius={this.toCelsius}
          toFahrenheit={this.toFahrenheit}
          tryConvert={this.tryConvert}
        />
        <ScatterChart />
      </div>
    )
  }
}

export default App
