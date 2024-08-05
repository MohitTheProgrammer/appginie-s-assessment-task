import { useRef } from "react";
import Button from "./Button";

const Form = ({ onAddTodo, todoID }) => {
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
    <form onSubmit={(e) => addTodo(e)}>
      <input
        type="text"
        name="todo"
        id="todo"
        ref={todoRef}
        className="border-2 border-gray-300 py-2 px-2 rounded-tr-none rounded-br-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type Something..."
      />
      <Button
        title={"Add"}
        className="bg-blue-500 text-white font-bold py-[10px] px-8 rounded-tr-lg rounded-br-lg hover:bg-blue-700"
      />
    </form>
  );
};

export default Form;
