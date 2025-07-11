import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  function addTodo(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
    setLocalStorage();
    setLocalStorage(newTodoList);
  }
  function deleteTodo(todoIndex) {
    const newTodoList = todos.filter((_, index) => index !== todoIndex);
    setTodos(newTodoList);
    setLocalStorage(newTodoList);
  }

  function editTodo(index) {
    const vari = todos[index];
    setTodoText(vari);
    deleteTodo(index);
  }

  function setLocalStorage(newList) {
    if (!localStorage) {
      return;
    }
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let storedTodos = localStorage.getItem("todos");
    if (!storedTodos) {
      return;
    }
    storedTodos = JSON.parse(storedTodos);
    setTodos(storedTodos.todos || []);
  }, []);

  return (
    <>
      <TodoInput
        todoText={todoText}
        setTodoText={setTodoText}
        addTodo={addTodo}
      />
      <TodoList
        todoText={todoText}
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </>
  );
}

export default App;
