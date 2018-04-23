import React from "react";
import "./Counter.css";

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      changer: 1
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.afterIncrement = this.afterIncrement.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
  }

  async increment() {
    await this.setState(prevState => {
      return { value: prevState.value + this.state.changer };
    });
    this.afterIncrement();
  }

  async afterIncrement() {
    await console.log("currentState:", this.state.value);
  }

  decrement() {
    this.setState(prevState => {
      return { value: prevState.value - this.state.changer };
    });
  }

  handleNumberChange(event) {
    console.log("handleNumberChange");
    const val = Number(event.target.value);
    this.setState(prevState => {
      return { changer: val };
    });
  }

  log() {
    console.log("log");
  }

  render() {
    const value = this.state.value;

    return (
      <div className="counter">
        <h3>Counter Component</h3>
        <input type="number" onChange={this.handleNumberChange} />
        <br />
        <button onClick={this.decrement}>-</button>
        <span onClick={this.log}>{value}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}
