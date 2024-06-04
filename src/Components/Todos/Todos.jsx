import { useContext } from "react";
import "../../App.css";
import { TodoContext } from "../../Store/Todos-items-context";

export default function Todos() {
  const { filteredItems, handleCompleted, editTask, handleDeleteItems } =
    useContext(TodoContext);

  return (
    <ul className="todos-list">
      {filteredItems.map((todo) => {
        return (
          <div className="todo-item" key={todo.id}>
            <div className="test">
              <h1>{todo.title}</h1>
              <input
                type="checkbox"
                checked={todo.isDone}
                onChange={() => handleCompleted(todo.id)}
              />
            </div>
            <p>{todo.desc}</p>
            <button onClick={() => editTask(todo.id)} className="edit-btn">
              Edit Task
            </button>
            <button onClick={() => handleDeleteItems(todo.id)}>
              Delete Task
            </button>
          </div>
        );
      })}
    </ul>
  );
}
