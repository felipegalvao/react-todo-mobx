import React, { Component } from "react";

import TodoList from "./TodoList";

class App extends Component {
  render() {
    const { todoStore } = this.props;

    return (
      <div>
        <h1>App Component</h1>
        <TodoList todoStore={todoStore} />
      </div>
    );
  }
}

export default App;
