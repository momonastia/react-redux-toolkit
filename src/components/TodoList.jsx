import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodoCompited, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleTodoCompited={toggleTodoCompited}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
