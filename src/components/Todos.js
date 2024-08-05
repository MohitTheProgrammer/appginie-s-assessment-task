import Button from "./Button";
import { useRef, useEffect } from "react";

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
        completed && "bg-green-300 text-black"
      } flex items-center my-4 justify-between p-2 border-2 rounded-lg text-white border-gray-300`}
    >
      {!editMode ? (
        <>
          <p className="w-56 text-black text-left">{title}</p>
          <div>
            <Button
              title={completed ? "Uncheck" : "Check"}
              className="bg-green-500 text-white font-bold py-[2px] px-2 mx-6 hover:bg-green-700"
              onClick={() => checkTodo(index)}
            />
            {!completed && (
              <Button
                title="Edit"
                className="bg-blue-500 text-white font-bold py-[10px] px-8 rounded-tl-lg rounded-bl-lg hover:bg-blue-700"
                onClick={() => getIndex(index)}
              />
            )}
            <Button
              title="Delete"
              className="bg-red-500 text-white font-bold py-[10px] px-8 rounded-tr-lg rounded-br-lg hover:bg-red-700"
              onClick={() => deleteTodo(index)}
            />
          </div>
        </>
      ) : (
        <form onSubmit={(e) => onUpdatetodo(e)}>
          <input
            type="text"
            name="todo"
            id="todo"
            ref={todoRef}
            className="border-2 text-black border-gray-300 py-2 px-2 rounded-tr-none rounded-br-none rounded-lg focus:outline-none focus:ring-2 w-[600px] focus:ring-blue-500"
            placeholder="Type Something..."
          />
          <Button
            title={"Update"}
            className="bg-blue-500 text-white font-bold py-[10px] px-8 rounded-tr-lg rounded-br-lg hover:bg-blue-700"
          />
        </form>
      )}
    </li>
  );
};

export default Todos;
