import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      todos: prevState.todos.concat(`todo ${prevState.todos.length}`)
    }));
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Todo List App</h1>
        <input className="input" type="text" />
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
