import React, { Component } from 'react';
import InputControl from './InputControl';
import TeamStandings from './TeamStandings';
import TeamViewSummary from './TeamViewSummary';
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
      team: ""
    };
  }
  onInputChanged(v) {
    this.setState({
      year: v.year,
      league: v.league,
      division: v.division,
      team: ""
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
        <TeamStandings
          year={this.state.year} 
          league={this.state.league} 
          division={this.state.division} 
          onTeamChanged={this.onTeamChanged}/>
        <TeamViewSummary
          year={this.state.year} 
          league={this.state.league} 
          division={this.state.division}
          team={this.state.team} />
      </div>
    );
  }
}

export default App;
