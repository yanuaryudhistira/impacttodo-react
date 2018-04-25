import React, { Component } from "react";

import Output from "../small/Output";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      input: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    this.setState(() => {
      return { input: value };
    });
  }

  handleClick() {
    if (this.state.input !== "") {
      this.setState(prevState => {
        return {
          todos: prevState.todos.concat(prevState.input),
          input: ""
        };
      });
    }
  }

  deleteTodo(target_index) {
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter((todo, index) => {
          return index !== target_index;
        })
      };
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="title" onClick={this.deleteTodo}>
          Todo List
        </h1>
        <input
          className="input"
          type="text"
          onChange={this.handleChange}
          value={this.state.input}
        />
        <button onClick={this.handleClick}>Add</button>
        <Output todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default TodoList;
