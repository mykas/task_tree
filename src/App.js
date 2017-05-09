import React, { Component } from "react";
import "./App.css";
import Tree from "./components/tree.js";
import { Row, Col, FormControl, Button } from "react-bootstrap";
import { LevelButton } from "./components/levelbutton.js";
import { unflatten } from "./components/utils.js";

class App extends Component {
  state = {
    array: [
      { id: 1, name: "Lietuva", parentid: 0 },
      { id: 2, name: "Vilnius", parentid: 1 },
      { id: 3, name: "Kaunas", parentid: 1 },
      { id: 4, name: "Naujininkai", parentid: 2 },
      { id: 5, name: "Latvija", parentid: 0 },
      { id: 6, name: "Estija", parentid: 0 },
      { id: 7, name: "Eisiskiu pl.", parentid: 4 }
    ],
    tree: null,
    list: null,
    value: "",
    selectedId: "",
    selectedLevel: "Select Level"
  };

  componentDidMount() {
    let array = this.state.array;
    let tree = unflatten(array);
    console.log(tree)
    this.setState({ tree });
  }

  changeLevel = id => {
    let array = this.state.array;
    let selectedLevel = array.filter(item => item.id === id);
    this.setState({ selectedId: id, selectedLevel: selectedLevel[0].name });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleClick = () => {
    let newArray = this.state.array;
    let generateId = Math.max.apply(Math, newArray.map(item => item.id)) + 1;
    newArray.push({
      id: generateId,
      name: this.state.value,
      parentid: this.state.selectedId
    });
    let tree = unflatten(newArray);
    this.setState({ array: newArray, tree });
  };

  render() {
    return (
      <div className="App-container">
        <Tree data={this.state.tree} />
        <Row>
          <Col md={2}>
            <LevelButton
              list={this.state.array}
              changeLevel={this.changeLevel}
              selectedLevel={this.state.selectedLevel}
            />
          </Col>
          <Col md={2}>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
          </Col>
          <Col md={2}>
            <Button bsStyle="primary" onClick={this.handleClick}>
              Add
            </Button>
          </Col>
        </Row>

      </div>
    );
  }
}

export default App;
