import React from "react";
import "./App.css";
import TodoContextProvider from "./Store/Todos-items-context";
import Header from "./Components/Header/Header";
import SearchAndFilter from "./Components/SearchAndFilter/SearchAndFilter";
import Buttons from "./Components/Buttons/Buttons";
import AddItemsForm from "./Components/AddItemsForm/AddItemsForm";
import Todos from "./Components/Todos/Todos";
import DailyMotivations from "./Components/Daily Motives/DailyMotives";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <TodoContextProvider>
      <div className="App">
        <Header />
        <SearchAndFilter />
        <Buttons />
        <AddItemsForm />
        <Todos />
        <hr />
        <DailyMotivations />
        <hr />
        <Footer />
      </div>
    </TodoContextProvider>
  );
}

export default App;
