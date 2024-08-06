import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

import { useState, useEffect } from "react";

import "./App.css";

import { environment } from "./environment/todos.env";

function App() {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Get data handler
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(environment.API_URL);
        const data = await res.json();
        console.log(data)
        const arr = [];
        for (const key in data) {
          arr.push(data[key]);
        }
        setTodos(arr);
      } catch {
        alert("Something went wrong!");
      }
    };

    getData();
  }, []);
  console.log(todos);
  //Delete todo handler
  const deleteTodo = (index) => {
    setTodos((state) => {
      const newTodos = [...state];
      newTodos.splice(index, 1);
      return newTodos;
    });
  };

  // Add todo handler
  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  // Check todo handler
  const checkTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = newTodos[index].completed ? false : true;
    setTodos(newTodos);
  };

  // Get todo index handler
  const getIndex = (index) => {
    setEditIndex(index);
  };

  // Update todo handler
  const updateTodo = (todo, index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1, todo);
    setTodos(newTodos);
    setEditIndex(null);
  };

  return (
    <div className="w-[800px] h-auto m-auto bg-purple-100 my-6 rounded-xl p-6 text-center shadow-md">
      <h1 className="text-[36px] font-bold text-black mb-4">Get Things Done</h1>
      <NewTodo onAddTodo={addTodo} todoID={todos.length + 1} />
      {todos.map((todo, index) => (
        <Todos
          key={index}
          title={todo.title}
          completed={todo.completed}
          deleteTodo={deleteTodo}
          checkTodo={checkTodo}
          index={index}
          editMode={editIndex === index}
          todo={todo}
          getIndex={getIndex}
          editIndex={editIndex}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
}

export default App;
