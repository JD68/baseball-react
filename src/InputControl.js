import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';
import baseballDataServices from './BaseballDataServices';
import viewServices from './ViewServices';

class InputControl extends Component {
  constructor(props) {
    super(props);
    this.onShowClick = this.onShowClick.bind(this);
    this.onYearChanged = this.onYearChanged.bind(this);
    this.onLeagueChanged = this.onLeagueChanged.bind(this);
    this.getLeagues = this.getLeagues.bind(this);
    this.getDivisions = this.getDivisions.bind(this);
    this.onDivisionChanged = this.onDivisionChanged.bind(this);
    this.onViewChanged = this.onViewChanged.bind(this);
    this.state = {
      years: [],
      leagues:[],
      leagueLabels: [],
      divisions: [],
      divisionsLabels: [],
      teamLabels: [],
      year: "",
      league: "",
      division: "",
      views: viewServices.views,
      view: viewServices.views[0]
    };
  }
  componentDidMount() {
    let self = this;
    let leaguesLabelsPromise = baseballDataServices.leagueLabels();
    let yearsPromise = baseballDataServices.years();
    let divisionsLabelsPromise = baseballDataServices.divisionLabels();
    let teamLabelsPromise = baseballDataServices.teamLabels();
    Promise.all([leaguesLabelsPromise, yearsPromise, divisionsLabelsPromise, teamLabelsPromise])
      .then(function(values){
        let leagueLabels = values[0];
        let years = values[1];
        let divisionLabels = values[2];
        let teamLabels = values[3];
        let firstYear = years[0];

       Promise.all([self.getLeagues(firstYear, leagueLabels), self.getDivisions(firstYear, divisionLabels)])
          .then(function(values){
            let leagues = values[0];
            let divisions = values[1];
            let league = leagues[0][0];
            let division = divisions.length === 0 ? "" : divisions[0][0];
            self.setState({
              leagueLabels: leagueLabels,
              years: years,
              year: firstYear,
              divisionsLabels: divisionLabels,
              teamLabels: teamLabels,
              divisions: divisions,
              leagues: leagues,
              league: league,
              division: division
            });
          });
      });
  }
  getDivisions(year, divisionsLabels) {
    let self = this;
    return baseballDataServices.divisions(year)
      .then(function(divisions) {
          divisions = divisions.reduce(function(acc, division) {
            if(division) {
              acc.push([division, divisionsLabels[division]]);
            }
            return acc;
          }, []);
          divisions.sort(self.commonSort);
          return divisions;
      });
  }
  getLeagues(year, leagueLabels) {
    let self = this;
    return baseballDataServices.leagues(year)
      .then(function(leagues) {
          leagues = leagues.reduce(function(acc, league) {
            acc.push([league, leagueLabels[league]])
            return acc;
          }, []);
          leagues.sort(self.commonSort);
          return leagues;
      });
  }
  commonSort(a,b) {
    if(a[1] < b[1]) return -1;
    if(a[1] > b[1]) return 1;
    return 0;
  }
  onYearChanged(e) {
    let year = e.target.value;
    let self = this;
    Promise.all([this.getLeagues(year, this.state.leagueLabels), this.getDivisions(year, this.state.divisionsLabels)])
      .then(function(values){
        let leagues = values[0];
        let divisions = values[1];
        let league = leagues[0][0];
        let division = divisions.length === 0 ? "" : divisions[0][0];
        self.setState({
          year: year,
          divisions: divisions,
          leagues: leagues,
          league: league,
          division: division
        });
      });
  }
  onLeagueChanged(e) {
    this.setState({league: e.target.value});
  }
  onDivisionChanged(e) {
    this.setState({division: e.target.value});
  }
  onViewChanged(e) {
    this.setState({view: e.target.value});
  }
  onShowClick(e) {
    this.props.onInputChanged({
      year: this.state.year,
      league: this.state.league,
      division: this.state.division,
      view: this.state.view
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
            <select className="form-control" id="selView" onChange={this.onViewChanged}>
              {this.state.views.map( function(view){
                return (<option value={view} key={view}>{view}</option>);
              })}
            </select>
        </div>
        <div className="col-md-2">
          <Button className="btn btn-default" onClick={this.onShowClick}>Show Team Standings</Button>
        </div>
      </Panel>
    );
  }
}

export default InputControl;
