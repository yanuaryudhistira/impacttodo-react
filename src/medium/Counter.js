import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0
    };
  }

  render() {
    const currentValue = this.state.currentValue;

    return (
      <div>
        <h4>Counter Component</h4>
        {currentValue}
      </div>
    );
  }
}
