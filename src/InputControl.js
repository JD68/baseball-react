import React, { Component } from 'react';
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';

class InputControl extends Component {
  render() {
    return (
      <div>
        <div className="col-md-1">
          <DropdownButton title="Year" id="years-nested-dropdown">
            <MenuItem eventKey="1">2014</MenuItem>
            <MenuItem eventKey="2">2013</MenuItem>
          </DropdownButton>
        </div>
        <div className="col-md-1">
          <DropdownButton title="League" id="leagues-nested-dropdown">
            <MenuItem eventKey="1">American</MenuItem>
            <MenuItem eventKey="2">National</MenuItem>
          </DropdownButton>
         </div>
        <div className="col-md-1">
          <DropdownButton title="Division" id="leagues-nested-dropdown">
            <MenuItem eventKey="1">East</MenuItem>
            <MenuItem eventKey="2">Central</MenuItem>
            <MenuItem eventKey="2">West</MenuItem>
          </DropdownButton>
         </div>
        <div className="col-md-1">
          <DropdownButton title="View" id="view-nested-dropdown">
            <MenuItem eventKey="1">Batting Average</MenuItem>
            <MenuItem eventKey="2">ERA</MenuItem>
            <MenuItem eventKey="2"></MenuItem>
          </DropdownButton>
         </div>
         <div className="col-md-1">
          <Button href="/foo/bar" className="btn btn-default">Foo</Button>
         </div>
      </div>
    );
  }
}

export default InputControl;
