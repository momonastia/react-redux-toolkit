import { useState } from "react";
import { useDispatch } from "react-redux";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import { addTodo } from "./store/todoSlice";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div className="App">
      <InputField text={text} handleSubmit={addTask} handleInput={setText} />
      <TodoList />
    </div>
  );
}

export default App;
