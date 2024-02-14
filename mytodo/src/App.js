import React from "react";

import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";

import "./style.css";
import CounterComponent from "./components/CountComponents";

const App = () => {
  return (
      <div className="todo-container">
        <CounterComponent />
        <Header title="Todo"/>
        <TodoItem text="Eat"/>
        <TodoItem completed="true" text="Code"/>
        <TodoItem text="Play"/>
        <TodoItem text="Study"/>
        <TodoItem text="Sleep"/>
        <Button />
      </div>
  );
}

export default App;
