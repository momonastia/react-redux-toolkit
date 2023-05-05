import { useDispatch } from "react-redux";
import { removeTodo } from "../store/todoSlice";

const TodoItem = ({ id, text, completed, toggleTodoCompited }) => {
  const dispatch = useDispatch();

  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoCompited(id)}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => dispatch(removeTodo({ id }))}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
