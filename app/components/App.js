import React, { Component } from "react";

import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

class App extends Component {
  render() {
    const { todoStore } = this.props;

    return (
      <div>
        <h1>App Component</h1>
        <AddTodo todoStore={todoStore} />
        <TodoList todoStore={todoStore} />
      </div>
    );
  }
}

export default App;
