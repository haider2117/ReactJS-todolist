export default function TodoCard(props) {
  const { todoIndex, deleteTodo, children, editTodo } = props;

  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            editTodo(todoIndex);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => deleteTodo(todoIndex)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
