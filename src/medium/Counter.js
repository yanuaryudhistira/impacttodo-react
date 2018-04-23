import React from "react";
import "./Counter.css";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  }

  decrement() {
    this.setState(prevState => {
      return { value: prevState.value - 1 };
    });
  }

  render() {
    const value = this.state.value;

    return (
      <div>
        <h3>Counter Component</h3>
        <button onClick={this.decrement}>-</button>
        <span>{value}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}
