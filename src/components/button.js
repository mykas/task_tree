import React, { Component } from "react";
import {Row, Col, SplitButton, MenuItem} from 'react-bootstrap'

class Button extends Component {
  render() {
    return (
      <SplitButton onSelect={this.props.changeLevel} title="Dropdown right" pullRight id="split-button-pull-right">
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3">Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
      </SplitButton>
    )
  }
}
export default Button;
