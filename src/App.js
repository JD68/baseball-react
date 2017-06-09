import React, { Component } from 'react';
import InputControl from './InputControl';
import TeamsStandings from './TeamsStandings';
import TeamsViewSummary from './TeamsViewSummary';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.onInputChanged = this.onInputChanged.bind(this);
    this.state = {
      year: "",
      league: "",
      division: "",
      view: ""
    };
  }
  onInputChanged(v) {
    this.setState({
      year: v.year,
      league: v.league,
      division: v.division,
      view: v.view
    });
  }
  render() {
    return (
      <div>
        <InputControl onInputChanged={this.onInputChanged} />
        <TeamsStandings
          year={this.state.year} 
          league={this.state.league} 
          division={this.state.division}/>
        <TeamsViewSummary
          year={this.state.year} 
          league={this.state.league} 
          division={this.state.division}
          view={this.state.view} />
      </div>
    );
  }
}

export default App;
