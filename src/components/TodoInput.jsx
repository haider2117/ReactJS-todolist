import React from "react";

export default function TodoInput(prop) {
  const { addTodo, todoText, setTodoText } = prop;

  return (
    <header>
      <input
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
        placeholder="Enter todo"
        type="text"
      />
      <button
        onClick={() => {
          addTodo(todoText);
          setTodoText("");
        }}
        type="submit"
      >
        Add
      </button>
    </header>
  );
}
