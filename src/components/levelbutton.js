import React, { Component } from "react";
import { SplitButton, MenuItem } from "react-bootstrap";

export const LevelButton = props => {
  let list = props.list?props.list.map(item => (
    <MenuItem key={item.id} eventKey={item.id}>{item.name}</MenuItem>
  )):null

  return (
    <SplitButton
      onSelect={props.changeLevel}
      title={props.selectedLevel}
      id="split-button-pull-right"
    >
      {list}
    </SplitButton>
  );
};
