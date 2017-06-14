import React, { Component } from "react";

class TodoListItem extends Component {
  render() {
    const { title } = this.props;

    return (
      <li>
        {title}
      </li>
    );
  }
}

export default TodoListItem;
