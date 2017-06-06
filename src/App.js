import React, { Component } from 'react';
import InputControl from './InputControl';
import TeamsStandings from './TeamsStandings';
import TeamsViewSummary from './TeamsViewSummary';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.onInputChanged = this.onInputChanged.bind(this);
    this.onTeamChanged = this.onTeamChanged.bind(this);
    this.state = {
      year: "",
      league: "",
      division: "",
      team: "",
      view: ""
    };
  }
  onInputChanged(v) {
    this.setState({
      year: v.year,
      league: v.league,
      division: v.division,
      team: "",
      view: v.view
    });
  }
  onTeamChanged(teamId) {
    this.setState({
      team: teamId
    });
  }
  render() {
    return (
      <div>
        <InputControl onInputChanged={this.onInputChanged} />
        <TeamsStandings
          year={this.state.year} 
          league={this.state.league} 
          division={this.state.division} 
          onTeamChanged={this.onTeamChanged}/>
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
