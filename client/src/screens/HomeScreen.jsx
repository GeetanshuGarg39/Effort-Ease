import React, { useState } from "react";
import Task from "../components/Task";
import axios from "axios";

const HomeScreen = () => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const getTokenFromCookie = () => {
    return document.cookie.replace(
      /(?:(?:^|.*;\s*)jwt\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
  };

  const handleCLick = async () => {
    const token = getTokenFromCookie();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/todo/save",
        {
          todo: todo,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      setTodo("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center gap-10">
        <div className="flex justify-center mt-32 gap-4">
          <input
            onChange={handleChange}
            value={todo}
            className=" outline-none border-b border-black p-2 w-[500px]"
            placeholder="Enter your to-do tasks"
          ></input>
          <button
            onClick={handleCLick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
          >
            Add
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <Task data = {"Make notes for Computer Networks"} />
          <Task data={"Revise Operating System notes"} />
          <Task data={"Learn complete MERN stack"} />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
