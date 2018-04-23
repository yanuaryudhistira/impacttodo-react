import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: "a"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      todos: "b"
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Todo List App {this.state.todos}</h1>
        <input className="input" type="text" />
        <button onClick={this.handleClick}>Add</button>
        <div className="output" />
      </div>
    );
  }
}

export default App;
