import Button from "./Button";
import { useRef, useEffect } from "react";

import CheckImg from "../images/check.png";
import CrossImg from "../images/cross.png";

const Todos = ({
  title,
  completed,
  deleteTodo,
  index,
  checkTodo,
  getIndex,
  editMode,
  updateTodo,
  todo,
}) => {
  const todoRef = useRef("");

  useEffect(() => {
    if (editMode) {
      todoRef.current.value = title;
    }
  }, [editMode, title]);

  // Update todo handler
  const onUpdatetodo = (e) => {
    e.preventDefault();
    const newTitle = todoRef.current.value;
    updateTodo(
      {
        ...todo,
        title: newTitle,
      },
      index
    );
  };

  return (
    <li
      className={`${
        completed ? "bg-green-200" : "bg-gray-100"
      } flex items-center my-4 justify-between p-4 border-2 rounded-lg shadow-md`}
    >
      {!editMode ? (
        <>
          <p
            className={`w-56 ${
              completed ? "line-through text-gray-500" : "text-black"
            } text-left font-semibold`}
          >
            {title}
          </p>
          <div className="flex items-center space-x-4">
            <button
              className={`${
                completed ? "bg-red-500" : "bg-green-500"
              } p-2 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300`}
              onClick={() => checkTodo(index)}
            >
              <img
                className="w-4 h-4 invert"
                src={completed ? CrossImg : CheckImg}
              />
            </button>
            {!completed && (
              <Button
                title="Edit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition duration-300"
                onClick={() => getIndex(index)}
              />
            )}
            <Button
              title="Delete"
              className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transform hover:scale-105 transition duration-300"
              onClick={() => deleteTodo(index)}
            />
          </div>
        </>
      ) : (
        <form
          onSubmit={(e) => onUpdatetodo(e)}
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
            title={"Update"}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition duration-300"
          />
        </form>
      )}
    </li>
  );
};

export default Todos;
