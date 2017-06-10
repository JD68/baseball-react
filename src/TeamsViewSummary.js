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
    return (
      <Panel header={this.props.view ? 'View Summary(' + this.props.view + ')' : 'View Summary'}>
        {viewServices.getView(this.props.view, this.state.teams)}
      </Panel>
    );
  }
}

export default TeamsViewSummary;