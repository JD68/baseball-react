import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import baseballDataServices from './BaseballDataServices';

class TeamsViewSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Panel header=" View Summary">
        <div>{this.props.year}</div>
        <div>{this.props.league}</div>
        <div>{this.props.division}</div>
        <div>{this.props.view}</div>
      </Panel>
    );
  }
}

export default TeamsViewSummary;