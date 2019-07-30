import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import TodosDispatch from "./store/provider";
import TodosWrapper from "./wrappers/todos";
import todosReducer, { initialState } from "./store/reducer";

import "antd/dist/antd.css";
import "./styles.css";

function App() {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodosDispatch.Provider value={dispatch}>
        <TodosWrapper todos={state.todos} currentView={state.currentView} />
      </TodosDispatch.Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
