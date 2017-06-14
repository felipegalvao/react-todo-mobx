import React from "react";
import ReactDOM from "react-dom";

import TodoStore from "./stores/TodoStore";
import App from "./components/App";

const todoStore = new TodoStore();

ReactDOM.render(<App todoStore={todoStore} />, document.getElementById("app"));
