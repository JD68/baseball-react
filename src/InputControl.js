import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';
import baseballDataServices from './BaseballDataServices';

class InputControl extends Component {
  constructor(props) {
    super(props);
    this.onShowClick = this.onShowClick.bind(this);
    this.onYearChanged = this.onYearChanged.bind(this);
    this.onLeagueChanged = this.onLeagueChanged.bind(this);
    this.setLeagues = this.setLeagues.bind(this);
    this.setDivisions = this.setDivisions.bind(this);
    this.onDivisionChanged = this.onDivisionChanged.bind(this);
    this.state = {
      years: [],
      leagues:[],
      leagueLabels: [],
      divisions: [],
      divisionsLabels: [],
      teamLabels: [],
      year: "",
      league: "",
      division: ""
    };
  }
  componentDidMount() {
    let self = this;
    let leaguesLabelsPromise = baseballDataServices.leagueLabels()
      .then(function(labels){
        return labels;
      });
    let yearsPromise = baseballDataServices.years()
      .then(function(years) {
        return years;
      });
    let divisionsLabelsPromise = baseballDataServices.divisionLabels()
      .then(function(labels){
        return labels;
      }); 
     let teamLabelsPromise = baseballDataServices.teamLabels()
      .then(function(labels){
        return labels;
      });
      Promise.all([leaguesLabelsPromise, yearsPromise, divisionsLabelsPromise, teamLabelsPromise])
        .then(function(){
          self.setState({
            leagueLabels: arguments[0][0],
            years: arguments[0][1],
            year: arguments[0][1][0],
            divisionsLabels: arguments[0][2],
            teamLabels: arguments[0][3]
          });
          Promise.all([self.setLeagues(arguments[0][1][0]), self.setDivisions(arguments[0][1][0])])
            .then(function(){
              self.props.onInputChanged({
                year: self.state.year,
                league: arguments[0][0][0][0],
                division: arguments[0][1][0][0]
              });
            });
        });
  }
  setDivisions(year) {
    let self = this;
    return baseballDataServices.divisions(year)
      .then(function(divisions) {
          divisions = divisions.reduce(function(acc, division) {
            if(division) {
              acc.push([division, self.state.divisionsLabels[division]]);
            }
            return acc;
          }, []);
          divisions.sort(self.commonSort);
          self.setState({
            divisions: divisions,
            division: divisions.length === 0 ? "" : divisions[0][0]
          });
          return divisions;
      });
  }
  setLeagues(year) {
    let self = this;
    return baseballDataServices.leagues(year)
      .then(function(leagues) {
          leagues = leagues.reduce(function(acc, league) {
            acc.push([league, self.state.leagueLabels[league]])
            return acc;
          }, []);
          leagues.sort(self.commonSort);
          self.setState({
            leagues: leagues,
            league: leagues[0][0]
          });
          return leagues;
      });
  }
  commonSort(a,b) {
    if(a[1] < b[1]) return -1;
    if(a[1] > b[1]) return 1;
    return 0;
  }
  onYearChanged(e) {
    this.setState({
      year: e.target.value
    });
    this.setLeagues(e.target.value);
    this.setDivisions(e.target.value);
  }
  onLeagueChanged(e) {
    this.setState({league: e.target.value});
  }
  onDivisionChanged(e) {
    this.setState({division: e.target.value});
  }
  onShowClick(e) {
    this.props.onInputChanged({
      year: this.state.year,
      league: this.state.league,
      division: this.state.division
    });
  }
  render() {
    return (
      <Panel header="Input">
        <div className="col-md-2">
            <label htmlFor="selYear">{this.state.teamLabels["yearID"]}:</label>
            <select className="form-control" id="selYear" value={this.state.year} onChange={this.onYearChanged}>
              {this.state.years.map( function(year){
                return (<option value={year} key={year.toString()}>{year}</option>);
              })}
            </select>
        </div>
        <div className="col-md-2">
            <label htmlFor="selLeague">{this.state.teamLabels["lgID"]}:</label>
            <select className="form-control" id="selLeague" value={this.state.league} onChange={this.onLeagueChanged}>
              {this.state.leagues.map( function(league){
                return (<option value={league[0]} key={league[0]}>{league[1]}</option>);
              })}
            </select>
        </div>
        <div className="col-md-2">
            <label htmlFor="selDivision">{this.state.teamLabels["divID"]}:</label>
            <select className="form-control" id="selDivision"  disabled={this.state.divisions.length === 0 ? "disabled" : ""} value={this.state.division} onChange={this.onDivisionChanged}>
              {this.state.divisions.map( function(division){
                return (<option value={division[0]} key={division[0]}>{division[1]}</option>);
              })}
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
