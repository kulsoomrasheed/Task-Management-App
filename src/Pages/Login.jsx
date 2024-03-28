import React, { useState } from 'react'
import Nav from '../Components/Nav'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authReducer/action';

const Login = () => {
  const navigate = useNavigate();
  const [username, setname] = useState("");
  const [pass, setpass] = useState("");

  const dispatch = useDispatch();
  const obj = {
    username,
    pass,
  };
  const handleclick = () => {
    console.log(obj);
    dispatch(login(obj))
    alert("Login successful")
    navigate("/tasks")
  };

  return (
    
    <div>
<Nav/>
<h1 className="text-white text-5xl p-4 pt-8 "style={{ backgroundColor: '#01111d' }}> Login </h1>

<div style={{ backgroundColor: '#01111d' }} className='py-24' >
<form className="w-1/2 bg-pink-50 mx-auto flex flex-col p-8 rounded-lg" action="" onSubmit={handleclick}>
  

  <label className="mb-2  text-black text-2xl">Username</label>
  <input type="text" placeholder="Enter your username..." onChange={(e)=>setname(e.target.value)} className="mb-4 py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />

  <label className="mb-2  text-black text-2xl">Password</label>
  <input type="password" onChange={(e)=>setpass(e.target.value)} placeholder="Enter Password..." className="mb-4 py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
  <input style={{ backgroundColor: '#071a2a', color: 'white' }} type="submit" placeholder="Login" className="mb-4 py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
</form>

</div>
    </div>
  )
}

export default Login