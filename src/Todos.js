import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo, index) => {
      return (
        <div className="collection-item" key={todo.id + index}>
          <span
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no more todo's.</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
