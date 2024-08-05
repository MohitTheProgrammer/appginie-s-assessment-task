import { useRef } from "react";
import Button from "./Button";

const NewTodo = ({ onAddTodo, todoID }) => {
  const todoRef = useRef("");

  const addTodo = (e) => {
    e.preventDefault();
    const todo = todoRef.current.value;
    todoRef.current.value = "";
    if (todo.trim()) {
      onAddTodo({
        id: todoID,
        title: todo,
        completed: false,
      });
    }
  };

  return (
    <form
      onSubmit={(e) => addTodo(e)}
      className="flex items-center space-x-2 w-full"
    >
      <input
        type="text"
        name="todo"
        id="todo"
        ref={todoRef}
        className="border-2 border-gray-300 py-2 px-4 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type Something..."
      />
      <Button
        title={"Add"}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition duration-300"
      />
    </form>
  );
};

export default NewTodo;
