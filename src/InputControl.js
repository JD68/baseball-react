import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';
import inputControlServices from './InputControlServices';

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
      year: "",
      league: "",
      division: ""
    };
  }
  componentDidMount() {
    let self = this;
    let leaguesLabelsPromise = inputControlServices.leagueLabels()
      .then(function(labels){
        return labels;
      });
    let yearsPromise = inputControlServices.years()
      .then(function(years) {
        return years;
      });
    let divisionsLabelsPromise = inputControlServices.divisionLabels()
      .then(function(labels){
        return labels;
      }); 
      Promise.all([leaguesLabelsPromise, yearsPromise, divisionsLabelsPromise])
        .then(function(){
          self.setState({
            leagueLabels: arguments[0][0],
            years: arguments[0][1],
            year: arguments[0][1][0],
            divisionsLabels: arguments[0][2]
          });
          self.setLeagues(arguments[0][1][0])
            .then(function(leagues) {
              self.setState({
                league: leagues[0][0]
              });
            });
          self.setDivisions(arguments[0][1][0])
            .then(function(divisions){
              if(divisions.length === 0) {
                self.setState({
                  division: ""
                });  
              } else {
                self.setState({
                  division: divisions[0][0]
                });
              }
            })
        });
  }
  setDivisions(year) {
    let self = this;
    return inputControlServices.divisions(year)
      .then(function(divisions) {
          divisions = divisions.reduce(function(acc, division) {
            if(division) {
              acc.push([division, self.state.divisionsLabels[division]]);
            }
            return acc;
          }, []);
          divisions.sort(self.commonSort);
          self.setState({
            divisions: divisions
          });
          return divisions;
      });
  }
  setLeagues(year) {
    let self = this;
    return inputControlServices.leagues(year)
      .then(function(leagues) {
          leagues = leagues.reduce(function(acc, league) {
            acc.push([league, self.state.leagueLabels[league]])
            return acc;
          }, []);
          leagues.sort(self.commonSort);
          self.setState({
            leagues: leagues
          });
          return leagues;
      });
  }
  commonSort(a,b) {
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
  }
  onYearChanged(e) {
    let self = this;
    this.setState({
      year: e.target.value
    });
    this.setLeagues(e.target.value)
      .then(function(leagues) {
        self.setState({
          league: leagues[0][0]
        })
      });
    this.setDivisions(e.target.value)
      .then(function(divisions) {
        if(divisions.length === 0){
          self.setState({
            division: ""
          });  
        } else {
          self.setState({
            division: divisions[0][0]
          })
        }
      });
  }
  onLeagueChanged(e) {
    this.setState({league: e.target.value});
  }
  onDivisionChanged(e) {
    this.setState({division: e.target.value});
  }
  onShowClick(e) {
    console.log(this.state)
    this.props.onInputChanged(e.target.value);
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
                return (<option value={league[0]} key={league[0]}>{league[1]}</option>);
              })}
            </select>
        </div>
        <div className="col-md-2">
            <label htmlFor="selDivision">Division:</label>
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
