import React, { useState } from "react";
import Nav from "../Components/Nav";
import { handlePatch } from "../redux/taskReducer/action";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const EditTasks = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    const obj = { title, desc };
    dispatch(handlePatch(id, obj));
    alert("Task Updated Successfully!");
    navigate("/tasks");
  };
  return (
    <div>
      <Nav />{" "}
      <h1
        className="text-white text-5xl p-4 pt-8 "
        style={{ backgroundColor: "#01111d" }}
      >
        {" "}
        Edit Your Todo Here
      </h1>
      <div style={{ backgroundColor: "#01111d" }} className="py-16">
        <form
          className="w-1/2 bg-pink-50 mx-auto flex flex-col p-8 rounded-lg"
          onSubmit={handleClick}
          action=""
        >
          <label className="mb-2 text-black text-2xl">Title</label>
          <input
            type="text"
            placeholder="Enter your Updated Title..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="mb-4 py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />

          <label className="mb-2  text-black text-2xl">Description</label>
          <input
            type="text"
            placeholder="Enter your Updated Description..."
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="mb-4 py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />

          <input
            style={{ backgroundColor: "#071a2a", color: "white" }}
            type="submit"
            placeholder="Register"
            className="mb-4 py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </form>
      </div>
    </div>
  );
};

export default EditTasks;
