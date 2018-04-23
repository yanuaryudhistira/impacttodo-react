import React, { Component } from "react";
import Output from "./small/output";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      input: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleClick() {
    this.setState(prevState => ({
      todos: prevState.todos.concat(`todo ${prevState.todos.length}`)
    }));
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Todo List App {this.state.input}</h1>
        <input
          className="input"
          type="text"
          onChange={this.handleChange}
          value={this.state.input}
        />
        <button onClick={this.handleClick}>Add</button>
        <Output todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
