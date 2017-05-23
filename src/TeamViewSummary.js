import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import baseballDataServices from './BaseballDataServices';

class teamViewSummary extends Component {
  render() {
    return (
      <Panel header=" View Summary">
        <div>{this.props.year}</div>
        <div>{this.props.league}</div>
        <div>{this.props.division}</div>
        <div>{this.props.team}</div>
      </Panel>
    );
  }
}

export default teamViewSummary;