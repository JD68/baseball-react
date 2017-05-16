import React, { Component } from 'react';
import InputControl from './InputControl';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.onInputChanged = this.onInputChanged.bind(this);
  }
  onInputChanged(v) {
    console.log(v);
  }
  render() {
    return (<InputControl onInputChanged={this.onInputChanged} />);
  }
}

export default App;
