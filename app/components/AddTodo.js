import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }

  onTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.todoStore.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Todo:
          <input
            type="text"
            value={this.state.title}
            onChange={this.onTitleChange}
          />
        </label>
        <input type="submit" value="Add Todo" />
      </form>
    );
  }
}

export default AddTodo;
