import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class TeamStandings extends Component {
  render() {
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