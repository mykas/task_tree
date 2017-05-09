import React, { Component } from "react";
import "./App.css";
import Tree from './Tree.js'
import {Row, Col, FormControl} from 'react-bootstrap'
import Button from './components/button.js'
import {unflatten} from './components/utils.js'



class App extends Component {
  state = {
    array: [
      { id: 1, parentid: 0 },
      { id: 2, parentid: 1 },
      { id: 3, parentid: 1 },
      { id: 4, parentid: 2 },
      { id: 5, parentid: 0 },
      { id: 6, parentid: 0 },
      { id: 7, parentid: 4 }
    ],
    tree: null,
    list: null
  };
  componentDidMount() {
    console.log(this.state.array)
    let tree = unflatten(this.state.array)

    this.setState({tree})
  }
  changeLevel(id,e) {
     console.log(e.target)
     this.setState({ value: e.target.value });
  }

  addNode() {

  }
  render() {
    return (
      <div className="App-container">
        <Row>
          <Tree data={this.state.tree}/>
          <Button list={this.state.list} changeLevel={this.changeLevel}/>
          <Col md={3}>
            <FormControl
             type="text"
             value="Current Value"
             placeholder="Enter text"
             onClick={this.addNode}
           />
          </Col>
        </Row>


      </div>
    );
  }
}



export default App;
