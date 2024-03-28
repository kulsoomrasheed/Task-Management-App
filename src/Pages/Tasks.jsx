import React, { memo, useCallback, useEffect, useState } from "react";
import Nav from "../Components/Nav";
import TodoItem from "../Components/TodoItem";
import { getTodos } from "../redux/authReducer/action";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const initstate = [
  { id: 1, title: "Task1", status: false },
  { id: 2, title: "Task2", status: false },
  { id: 3, title: "Task3", status: false },
];

const Tasks = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todo, setTodo] = useState([]);

  const dispatch = useDispatch();
  const token = useSelector((store) => store.token);
  console.log(token);
  const handleAddTodo = () => {
    const obj = { title, desc, status: "pending" };
    axios
      .post("https://task-management-backend-3gib.onrender.com/tasks", obj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        fetchData();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get("https://task-management-backend-3gib.onrender.com/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setTodo(res.data.tasks);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleDelete=(_id)=>{
    axios.delete(`https://task-management-backend-3gib.onrender.com/tasks/delete/${_id}`,{
    
        headers: {
          Authorization: `Bearer ${token}`,
        },
    }).then((res)=>{
      console.log(res.data)
      fetchData()
    }).catch((err) => {
  console.log(err.message);
    })
  }
  const handleToggle=useCallback((_id)=>{
    setTodo((prev)=>{
      return prev.map((el)=>{
  return el._id==_id?{...el,status: !el.status}:el
})
    })

  },[])
  return (
    <div>
      <Nav />
      <div
        style={{ backgroundColor: "#01111d", color: "white" }}
        className="py-12"
      >
        <input
          className="border border-gray-300 focus:outline-none"
          type="text"
          name="Enter Title"
          id=""
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          className="border border-gray-300 focus:outline-none"
          type="text"
          name="Enter Title"
          id=""
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <button onClick={handleAddTodo} className="text-black bg-pink-600">
          Add
        </button>
      </div>

      <div
        style={{ backgroundColor: "#01111d", color: "white" }}
        className="p-18 pb-24"
      >
        {todo.map((el) => {
          return <TodoItem key={el._id} {...el} handleToggle={handleToggle} handleDelete={handleDelete}/>;
        })}
      </div>
    </div>
  );
};

export default memo(Tasks);
