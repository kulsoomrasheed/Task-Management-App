/*import React, { useState } from 'react'
import Nav from './Nav'
import { useDispatch } from 'react-redux';
import { getTasks, postTasks } from '../redux/taskReducer/action';
import { useNavigate } from 'react-router-dom';

const AddTodo = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const obj={title,desc}
    const handleAddTodo=()=>{
      dispatch(postTasks(obj));
      alert("A new task has been added")
      navigate("/tasks")
      dispatch(getTasks)
    }
  return (
    <div>
        <Nav/>
        <div
        style={{ backgroundColor: "#01111d" }}
        className="py-12 mx-auto w-96 gap-1 flex flex-col p-8 rounded-lg"
      >
          <label className=" text-white ">Title</label>

        <input 
          className="border border-pink-300 focus:outline-none text-black"
          type="text"
          name="Enter Title"
          id=""
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
          <label className=" text-white">Description</label>

        <input
          className="border  border-pink-300 focus:outline-none text-black"
          type="text"
          name="Enter Title"
          id=""
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <button onClick={handleAddTodo} className=" bg-pink-600 text-white">
          Add
        </button>
      </div>
    </div>
  )
}

export default AddTodo*/