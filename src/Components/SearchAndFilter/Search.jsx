import { useContext } from "react";
import "../../App.css";
import { TodoContext } from "../../Store/Todos-items-context";

export default function Search() {
  const { searchTerm, setSearchTerm } = useContext(TodoContext);

  return (
    <div className="search-container">
      <form>
        <label htmlFor="search">Search by title: </label>
        <input
          type="search"
          id="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
}
