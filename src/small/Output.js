import React from "react";

function Output(props) {
  return (
    <div className="output">
      {props.todos.map((todo, index) => (
        <div className="todo" key={index}>
          <div className="todo-text">{todo}</div>
          <div onClick={() => props.deleteTodo(index)}>X</div>
        </div>
      ))}
    </div>
  );
}

export default Output;
