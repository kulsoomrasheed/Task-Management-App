import React, { memo, useCallback, useEffect, useState } from "react";
import Nav from "../Components/Nav";
import TodoItem from "../Components/TodoItem";
import { getTodos } from "../redux/authReducer/action";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getTasks, postTasks } from "../redux/taskReducer/action";
import { useNavigate } from "react-router-dom";


const Tasks = () => {
  const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const todo = useSelector((store) => store.taskReducer.tasks);
   const {loading}=useSelector((store) => store.taskReducer);
   
    const obj={title,desc}
    const handleAddTodo=()=>{
      dispatch(postTasks(obj));
      alert("A new task has been added")
      navigate("/tasks")
      dispatch(getTasks)
      setDesc("")
      setTitle("")
    }


  useEffect(() => {
    dispatch(getTasks);
  }, []);


     
 
 /* const handleToggle=useCallback((_id)=>{
    setTodos((prev)=>{
      return prev.map((el)=>{
  return el._id==_id?{...el,status: !el.status}:el
})
    })

  },[])*/


  return (
    <div         style={{ backgroundColor: "#01111d" }}
    >
      <Nav />
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
        <button onClick={handleAddTodo} className=" bg-pink-600 text-white  my-3">
          Add
        </button>
      </div>

      <div
        style={{ backgroundColor: "#01111d", color: "white" }}
        className="p-18 pb-24 mx-auto"
      >
        {todo.length>0 && todo.map((el) => {
          
                    localStorage.setItem("user",el.userID)
localStorage.setItem("username",el.username)
          return <TodoItem key={el._id} {...el}  />;
        })}
      </div>
    </div>
  );
};

export default memo(Tasks);
