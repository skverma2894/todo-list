import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useSelector((state) => state.TodoReducer.todos);
  return todos.map((todo) => <TodoItem key={todo.id} item={todo} />);
}

export default TodoList;
