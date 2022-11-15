import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play mario kart" },
    ],
  };

  addTodo = (todo) => {
    todo.id = this.state.todos[this.state.todos.length - 1].id + 1;
    const copyTodos = [...this.state.todos, todo];
    this.setState({
      todos: copyTodos,
    });
  };

  deleteTodo = (id) => {
    const copyTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: copyTodos,
    });
    console.log(id);
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's:</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
