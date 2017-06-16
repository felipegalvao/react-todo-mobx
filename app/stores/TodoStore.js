import { observable, computed } from "mobx";
const uuidV4 = require("uuid/v4");

export default class TodoStore {
  @observable todos = [];

  @computed
  get activeTodoCount() {
    return this.todos.reduce((sum, todo) => sum + (todo.completed ? 0 : 1), 0);
  }

  @computed
  get completedTodoCount() {
    return this.todos.length - this.activeTodoCount;
  }

  addTodo(title) {
    this.todos.push({
      id: uuidV4(),
      title
    });
  }
}
