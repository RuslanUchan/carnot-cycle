import React, { Component } from "react"
import "./App.css"

import ScatterChart from "./components/ScatterChart"

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };
  
  function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
  
  function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }

  render() {
    return (
      <div className="App">
        <ScatterChart />
      </div>
    )
  }
}

export default App
