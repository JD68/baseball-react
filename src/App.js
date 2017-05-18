import React, { Component } from 'react';
import InputControl from './InputControl';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.onInputChanged = this.onInputChanged.bind(this);
    this.state = {
      year: "",
      league: "",
      division: ""
    };
  }
  onInputChanged(v) {
    this.setState({
      year: v.year,
      league: v.league,
      division: v.division
    });
  }
  render() {
    console.log(this.state);
    return (<InputControl onInputChanged={this.onInputChanged} />);
  }
}

export default App;
