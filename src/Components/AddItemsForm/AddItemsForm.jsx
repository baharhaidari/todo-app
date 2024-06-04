import { useContext } from "react";
import "../../App.css";
import { TodoContext } from "../../Store/Todos-items-context";

export default function AddItemsForm() {
  const {
    showAddItemForm,
    enteredTitle,
    setEnteredTitle,
    enteredDesc,
    setEnteredDesc,
    handleAddTodos,
    editMode,
  } = useContext(TodoContext);

  return (
    <div className="wrapper">
      {showAddItemForm && (
        <div className="add-items-form">
          <form>
            <div className="inputs-container">
              <div className="container">
                <>
                  <label htmlFor="searchTitle">Item Title: </label>
                  <input
                    type="text"
                    placeholder="Item Title"
                    id="searchTitle"
                    value={enteredTitle}
                    onChange={(e) => {
                      setEnteredTitle(e.target.value);
                    }}
                  />
                </>

                <>
                  <label htmlFor="searchDesc">Item Description: </label>
                  <input
                    type="text"
                    placeholder="Item desc"
                    id="searchDesc"
                    value={enteredDesc}
                    onChange={(e) => {
                      setEnteredDesc(e.target.value);
                    }}
                  />
                </>
              </div>

              <button onClick={handleAddTodos}>
                {editMode ? "Update Item" : "Add Item to List"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
