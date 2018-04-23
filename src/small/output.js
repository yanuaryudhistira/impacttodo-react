import React from "react";

function Output(props) {
  return (
    <div className="output">
      THIS IS STATELESS COMPONENT <br />
      {props.todos.map((todo, index) => (
        <div className="todo">
          <div className="todo-text">{todo}</div>
          <div onClick={() => props.deleteTodo(index)}>X</div>
        </div>
      ))}
    </div>
  );
}

export default Output;
