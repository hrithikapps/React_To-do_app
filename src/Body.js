import React from "react";
import { useState } from "react";

const Body = () => {
  const [taskArray, setTaskArray] = useState([]);
  const [task, setTask] = useState("");

  function handleButtonClick() {
    console.log("triggered");
    if (task !== "") {
      setTaskArray([...taskArray, task]);
      setTask("");
    }
  }
  const deleteTask = (index) => {
    const updatedTask = [...taskArray];
    updatedTask.splice(index, 1);
    setTaskArray(updatedTask);
  };

  return (
    <>
      <div className="flex flex-col items-center mt-2">
        <h2 className="text-4xl text-center font-bold ">Simple To-Do App</h2>
        <div className="m-4 p-4 ">
          <input
            className="m-4 p-4 bg-slate-100 "
            type="text"
            value={task}
            placeholder="Add to-do"
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            onClick={handleButtonClick}
            className="p-4 m-4  bg-green-500 hover:bg-green-600 text-white rounded-md font-bold "
          >
            Add Task
          </button>
        </div>
        <div>
          {taskArray?.length > 0 ? (
            <ul>
              {taskArray.map((task, index) => (
                <div
                  className="flex bg-slate-100 m-4 py-4 pl-12 pr-4 rounded-md"
                  key={index}
                >
                  <li className="self-center font-semibold pr-10 mr-6 grow">
                    {task}
                  </li>
                  <button
                    onClick={() => deleteTask(index)}
                    className=" bg-red-500 text-white rounded-md mx-1 font-bold p-2  hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </ul>
          ) : (
            <p>No tasks Available </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Body;

// const deleteTask = (index) => {
//   const updatedTask = [...taskArray];
//   updatedTask.splice(index, 1);
//   setTaskArray(updatedTask);
// };
