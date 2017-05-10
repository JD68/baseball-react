import React, { Component } from 'react';
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';

class InputControl extends Component {
  render() {
    return (
      <div>
        <DropdownButton title="Year" id="years-nested-dropdown">
          <MenuItem eventKey="1">2014</MenuItem>
          <MenuItem eventKey="2">2013</MenuItem>
        </DropdownButton>
        <DropdownButton title="League" id="leagues-nested-dropdown">
          <MenuItem eventKey="1">American</MenuItem>
          <MenuItem eventKey="2">National</MenuItem>
        </DropdownButton>
        <DropdownButton title="Division" id="leagues-nested-dropdown">
          <MenuItem eventKey="1">East</MenuItem>
          <MenuItem eventKey="2">Central</MenuItem>
          <MenuItem eventKey="2">West</MenuItem>
        </DropdownButton>
        <DropdownButton title="View" id="view-nested-dropdown">
          <MenuItem eventKey="1">Batting Average</MenuItem>
          <MenuItem eventKey="2">ERA</MenuItem>
          <MenuItem eventKey="2"></MenuItem>
        </DropdownButton>
        <Button href="/foo/bar" className="btn btn-default">Foo</Button>
      </div>
    );
  }
}

export default InputControl;
