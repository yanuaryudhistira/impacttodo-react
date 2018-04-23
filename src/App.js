import React, { Component } from "react";

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
        <div className="output">
          {this.state.todos.map((todo, index) => (
            <div className="todo">
              <div className="todo-text">{todo}</div>
              <div>x</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
