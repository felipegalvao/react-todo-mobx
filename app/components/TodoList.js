import React, { Component } from "react";
import { observer } from "mobx-react";

import TodoListItem from "./TodoListItem";

@observer
class TodoList extends Component {
  render() {
    const { todoStore } = this.props;

    const todoItems = todoStore.todos.map(todo => {
      return <TodoListItem key={todo.id} {...todo} />;
    });

    console.log(todoStore);
    return (
      <div>
        <ul>
          {todoItems}
        </ul>
      </div>
    );
  }
}

export default TodoList;
