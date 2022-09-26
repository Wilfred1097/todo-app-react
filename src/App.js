import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Create WebApp",
    },
    {
      id: 2,
      text: "Create Mobile",
    },
    {
      id: 3,
      text: "Time to sleep",
    },
  ]);

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  };

  const addTodo = (text) => {
    const id = todos.length + 1;
    const newTodo = { id, text };
    console.log(newTodo)
   setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <Header />
      <AddTodo onAdd={addTodo} />
      <Todos todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
