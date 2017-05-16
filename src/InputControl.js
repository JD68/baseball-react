import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';
import inputControlServices from './InputControlServices';

class InputControl extends Component {
  constructor(props) {
    super(props);
    this.onShowClick = this.onShowClick.bind(this);
    this.onYearChanged = this.onYearChanged.bind(this);
    this.onLeagueChanged = this.onLeagueChanged.bind(this);
    this.state = {
      years: [],
      leagues:[],
      year: "",
      league: ""
    };
  }
  componentDidMount() {
    let self = this;
    inputControlServices.years()
      .then(function(years) {
        self.setState({
          years: years
        });
        inputControlServices.leagues(years[0])
          .then(function(leagues) {
              self.setState({
              leagues: leagues
            });
          });
       /* 
          .then(function(leagues) {
            self.setState({
              leagues: leagues
            });*/
      });
  }
  onYearChanged(e) {
    let self = this;
    this.setState({
      year: e.target.value,
      league: ""
    });
    inputControlServices.leagues(e.target.value)
      .then(function(leagues) {
        self.setState({
          leagues: leagues
        });
      });
  }
  onLeagueChanged(e) {
    this.setState({league: e.target.value});
  }
  onShowClick(e) {
      this.props.onInputChanged(e.target.value);
      console.log(this.state.years);
  }
  render() {
    return (
      <Panel header="Input Control">
        <div className="col-md-2">
            <label htmlFor="selYear">Year:</label>
            <select className="form-control" id="selYear" value={this.state.year} onChange={this.onYearChanged}>
              {this.state.years.map( function(year){
                return (<option value={year} key={year.toString()}>{year}</option>);
              })}
            </select>
        </div>
        <div className="col-md-2">
            <label htmlFor="selLeague">League:</label>
            <select className="form-control" id="selLeague" value={this.state.league} onChange={this.onLeagueChanged}>
              {this.state.leagues.map( function(league){
                return (<option value={league} key={league}>{league}</option>);
              })}
            </select>
        </div>
        <div className="col-md-2">
            <label htmlFor="selDivision">Division:</label>
            <select className="form-control" id="selDivision">
              <option>East</option>
              <option>Central</option>
              <option>West</option>
            </select>
        </div>
        <div className="col-md-2">
            <label htmlFor="selView">View:</label>
            <select className="form-control" id="selView">
              <option>Batting Average</option>
              <option>ERA</option>
            </select>
        </div>
        <div className="col-md-2">
          <Button className="btn btn-default" onClick={this.onShowClick}>Show Results</Button>
        </div>
      </Panel>
    );
  }
}

export default InputControl;
