import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import baseballDataServices from './BaseballDataServices';

class TeamsStandings extends Component {
  constructor(props) {
      super(props);
      this.state = {
        teamLabels: [],
        teams: []
      };
    }
  componentDidMount() {
    let self = this;
    baseballDataServices.teamLabels()
      .then(function(labels){
          self.setState({
            teamLabels: labels
          });
      });
  }
  componentWillReceiveProps(nextProps) {
    let self = this;
    if(nextProps.year && nextProps.league) {
      baseballDataServices.teams(nextProps.year, nextProps.league, nextProps.division)
        .then(function(teams) {
          teams.sort(function(a,b) {
            if(a.Rank < b.Rank) return -1;
            if(a.Rank > b.Rank) return 1;
            return 0;
          });
          self.setState({
            teams: teams
          });
        });
    }
  }

  render() {
    let self = this;
    return (
      <Panel header="Team Standings">
        <table className="table">
          <thead>
            <tr>
              <th>{this.state.teamLabels["Rank"]}</th>
              <th>{this.state.teamLabels["name"]}</th>
              <th>{this.state.teamLabels["W"]}</th>
              <th>{this.state.teamLabels["L"]}</th>
              <th>{this.state.teamLabels["WSWin"]}</th>
              <th>{this.state.teamLabels["LgWin"]}</th>
              <th>{this.state.teamLabels["DivWin"]}</th>
              <th>{this.state.teamLabels["WCWin"]}</th>
            </tr>
          </thead>
          <tbody>
            {this.state.teams.map( function(team){
              return (
                <tr key={team.teamID}>
                  <td className="col-md-1">{team.Rank}</td>
                  <td className="col-md-1">{team.name}</td>
                  <td className="col-md-1">{team.W}</td>
                  <td className="col-md-1">{team.L}</td>
                  <td className="col-md-1">{!team.WSWin ? "--" : team.WSWin}</td>
                  <td className="col-md-1">{!team.LgWin ? "--" : team.LgWin}</td>
                  <td className="col-md-1">{!team.DivWin ? "--" : team.DivWin}</td>
                  <td className="col-md-1">{!team.WCWin ? "--" : team.WCWin}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Panel>
    );
  }
}

export default TeamsStandings;