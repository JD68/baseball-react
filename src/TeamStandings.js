import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import baseballDataServices from './BaseballDataServices';

class TeamStandings extends Component {
  render() {

    baseballDataServices.teams(this.props.year, this.props.league, this.props.division)
      .then(function(teams) {
        console.log(teams)
      });
    return (
      <Panel header="Team Standings">
        <div>{this.props.year}</div>
        <div>{this.props.league}</div>
        <div>{this.props.division}</div>
      </Panel>
    );
  }
}

export default TeamStandings;