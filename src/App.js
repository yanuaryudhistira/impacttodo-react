import React, { Component } from "react";
import Home from "./pages/home";
import TodoList from "./pages/todoapp";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul className="nav">
            <li className="li">
              <Link to="/">Home</Link>
            </li>
            <li className="li">
              <Link to="/todolist">Todo-App</Link>
            </li>
            <li className="li">
              <Link to="/about">About</Link>
            </li>
          </ul>

          <Route path="/" component={Home} />
          <Route path="/todolist" component={TodoList} />
        </div>
      </Router>
    );
  }
}

export default App;
