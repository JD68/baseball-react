import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import baseballDataServices from './BaseballDataServices';

class teamViewSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }
  render() {
    return (
      <Panel header=" View Summary" onClick={()=> this.setState({ open: !this.state.open })} collapsible expanded={this.state.open}>
        <div>{this.props.year}</div>
        <div>{this.props.league}</div>
        <div>{this.props.division}</div>
        <div>{this.props.team}</div>
      </Panel>
    );
  }
}

export default teamViewSummary;