import { useState } from "react";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          complited: false,
        },
      ]);
      setText("");
    }
  };

  const toggleTodoCompited = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          complited: !todo.complited,
        };
      })
    );
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="App">
      <InputField text={text} handleSubmit={addTodo} handleInput={setText} />
      <TodoList
        todos={todos}
        toggleTodoCompited={toggleTodoCompited}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
