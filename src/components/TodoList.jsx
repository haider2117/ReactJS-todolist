import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(pro) {
  const { todos, deleteTodo, editTodo } = pro;

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            editTodo={editTodo}
            todoIndex={todoIndex}
            deleteTodo={deleteTodo}
          >
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
