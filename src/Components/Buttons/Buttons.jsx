import { useContext } from "react";
import "../../App.css";
import { TodoContext } from "../../Store/Todos-items-context";

export default function Buttons() {
  const { handleShowForm, handleDeleteAllItems } = useContext(TodoContext);

  return (
    <section className="buttons-container">
      <button onClick={handleShowForm} className="glass-btn">
        Add New Item
      </button>
      <button onClick={handleDeleteAllItems}>Delete All Items</button>
    </section>
  );
}
