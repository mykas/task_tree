import React, { Component } from "react";

class Tree extends Component {
  render() {
    let content = null;
    if (this.props.data) {
      content = (
        <ul>
          {this.props.data.map((branch, index) => (
            <li key={index}>
              {branch.name}
              {branch.children && <Tree data={branch.children} />}
            </li>
          ))}
        </ul>
      );
    }
    return <div> {content}</div>;
  }
}
export default Tree;
