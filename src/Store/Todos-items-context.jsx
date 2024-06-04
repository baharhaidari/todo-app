import React, { createContext, useState, useEffect } from "react";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const TODOS_ITEMS = [
    {
      id: 1,
      title: "Coding Daily",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda incidunt fuga dignissimos sint, excepturi velit.",
      isDone: false,
    },
    {
      id: 2,
      title: "Working Daily",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda incidunt fuga dignissimos sint, excepturi velit.",
      isDone: false,
    },
    {
      id: 3,
      title: "Playing Call of Duty",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda incidunt fuga dignissimos sint, excepturi velit.",
      isDone: false,
    },
    {
      id: 4,
      title: "Going to picnic",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda incidunt fuga dignissimos sint, excepturi velit.",
      isDone: false,
    },
  ];

  const RANDOM_MOTIVES = [
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "Start each day with a grateful heart and a positive mindset.",
    "You are capable of amazing things. Believe it. Achieve it.",
    "Embrace the challenges that come your way. They are opportunities for growth and learning.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Your journey is unique. Embrace it. Enjoy it. Live it.",
    "Every day is a new beginning. Take a deep breath, smile, and start again.",
    "You are stronger than you think. Keep going. You've got this.",
    "Dream big, work hard, stay focused, and surround yourself with positive people.",
    "Make each day count. You have the power to create a life you love.",
    "Your attitude determines your direction. Choose positivity and embrace possibilities.",
    "Success is not about being the best. It's about being better than you were yesterday.",
    "Believe in your dreams and take the necessary steps to make them a reality.",
    "You are capable of achieving greatness. Believe in yourself and go for it.",
    "Keep going, even when it gets tough. The best is yet to come.",
    "Be fearless in the pursuit of what sets your soul on fire.",
    "Your time is limited, so don't waste it living someone else's life. Follow your passion and live your purpose.",
    "Stay focused, stay positive, stay determined. You are closer than you think.",
    "Your dreams are within reach. Keep working hard and never give up.",
    "Every small step you take brings you closer to your goals. Keep moving forward.",
    "Rise above the storm and you will find the sunshine. Stay strong.",
    "Believe in yourself, trust the process, and keep going. Success will come.",
    "Don't let yesterday take up too much of today. Focus on the present and make it amazing.",
    "You are the author of your own story. Write a beautiful one.",
    "Setbacks are just setups for comebacks. Keep pushing forward.",
    "Success is not for the chosen few, but for the few who choose it. Choose success.",
    "Don't wait for the perfect moment. Take the moment and make it perfect.",
    "You have the power to turn your dreams into reality. Take action and make it happen.",
    "Believe in your abilities, trust your instincts, and never doubt yourself.",
    "Your only limit is you. Believe in your potential and unleash your greatness.",
    "You are capable of achieving anything you set your mind to. Believe. Act. Succeed.",
    "Every day is an opportunity to grow, learn, and become a better version of yourself.",
  ];

  const [todos, setTodos] = useState(TODOS_ITEMS);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDesc, setEnteredDesc] = useState("");
  const [showAddItemForm, setShowAddItemForm] = useState(false);
  const [filteredItems, setFilteredItems] = useState(TODOS_ITEMS);
  const [searchTerm, setSearchTerm] = useState("");
  const [motives, setMotives] = useState(RANDOM_MOTIVES);
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState({});

  const handleAddTodos = (event) => {
    event.preventDefault();
    if (editMode) {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === editedTask.id) {
          return {
            ...todo,
            title: enteredTitle,
            desc: enteredDesc,
          };
        }
        return todo;
      });

      setTodos(updatedTodos);
      setEditMode(false);
      setEditedTask({});
      setShowAddItemForm(false);
    } else {
      const id = Math.floor(Math.random() * 100) + 1;

      const newTodos = {
        id: id,
        title: enteredTitle,
        desc: enteredDesc,
        isDone: false,
      };

      setTodos([...todos, newTodos]);
    }

    setEnteredTitle("");
    setEnteredDesc("");
    setShowAddItemForm(false);
  };

  const handleShowForm = () => {
    setShowAddItemForm(!showAddItemForm);
  };

  const handleCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  useEffect(() => {
    const filtered = todos.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [todos, searchTerm]);

  const filterItems = (title) => {
    setFilteredItems(title);
    setSearchTerm("");
    setShowAddItemForm(false);

    if (title === "all") {
      setFilteredItems(todos);
    } else if (title === "completed") {
      const filtered = todos.filter((item) => item.isDone === true);
      setFilteredItems(filtered);
    } else if (title === "incompleted") {
      const filtered = todos.filter((item) => item.isDone === false);
      setFilteredItems(filtered);
    }
  };

  const handleDeleteAllItems = () => {
    setTodos([]);
  };

  const handleDeleteItems = (id) => {
    const updatedItems = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updatedItems);
    setShowAddItemForm(false);
  };

  const handleShowMotives = () => {
    const randomIndex = Math.floor(Math.random() * RANDOM_MOTIVES.length);
    setMotives(randomIndex);
  };

  const editTask = (id) => {
    const taskToEdit = todos.find((todo) => todo.id === id);
    if (taskToEdit) {
      setEditedTask(taskToEdit);
      setEnteredTitle(taskToEdit.title);
      setEnteredDesc(taskToEdit.desc);
      setEditMode(true);
      setShowAddItemForm(true);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        enteredTitle,
        enteredDesc,
        showAddItemForm,
        filteredItems,
        searchTerm,
        editMode,
        editedTask,
        handleAddTodos,
        handleShowForm,
        handleCompleted,
        filterItems,
        handleDeleteAllItems,
        handleDeleteItems,
        handleShowMotives,
        editTask,
        setEnteredTitle,
        setEnteredDesc,
        setSearchTerm,
        RANDOM_MOTIVES,
        motives,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
