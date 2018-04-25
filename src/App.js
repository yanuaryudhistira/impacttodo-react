import React, { Component } from "react";
import Home from "./pages/home";
import TodoList from "./pages/todoapp";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Home} />
          <ul class="nav">
            <li class="li">
              <Link to="/">Home</Link>
            </li>
            <li class="li">
              <Link to="/todolist">Todo-App</Link>
            </li>
            <li class="li">
              <Link to="/about">About</Link>
            </li>
          </ul>

          <Route path="/todolist" component={TodoList} />
        </div>
      </Router>
    );
  }
}

export default App;
