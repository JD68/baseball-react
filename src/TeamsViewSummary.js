import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import baseballDataServices from './BaseballDataServices';
import viewServices from './ViewServices';

class TeamsViewSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
    };
  }
  componentWillReceiveProps(nextProps) {
    let self = this;
    if(nextProps.year && nextProps.league) {
      baseballDataServices.teams(nextProps.year, nextProps.league, nextProps.division)
        .then(function(teams) {
          self.setState({
            teams: teams
          });
        });
    }
  }
  render() {
    return (
      <Panel header=" View Summary">
        {viewServices.getView(this.props.view, this.state.teams)}
        <div>{this.props.year}</div>
        <div>{this.props.league}</div>
        <div>{this.props.division}</div>
        <div>{this.props.view}</div>
        {this.state.teams.map( function(team){
          return (
            <div key={team.teamID}>
              <span>{team.name}</span>
            </div>
          );
        })}
      </Panel>
    );
  }
}

export default TeamsViewSummary;