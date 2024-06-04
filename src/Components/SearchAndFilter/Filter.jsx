import { useContext } from "react";
import "../../App.css";
import { TodoContext } from "../../Store/Todos-items-context";

export default function Filters() {
  const { filterItems } = useContext(TodoContext);

  return (
    <div className="filters-container">
      <ul className="filters">
        <li onClick={() => filterItems("all")}>All tasks</li>
        <li onClick={() => filterItems("completed")}>Completed tasks</li>
        <li onClick={() => filterItems("incompleted")}>Incompleted tasks</li>
      </ul>
    </div>
  );
}
