import React, { useState } from 'react'
import Nav from '../Components/Nav'
import { useNavigate } from 'react-router-dom'
import { signup } from '../redux/authReducer/action'
import {useDispatch} from "react-redux"

const Signup = () => {
  const [email,setEmail]= useState("")
  const [pass,setPass]= useState("")
  const [username,setName]= useState("")

  const obj={email,username,pass}
  const dispatch=useDispatch()
const navi= useNavigate()
  const handleClick=()=>{
  
    console.log(obj);
    setEmail("")
    setPass("")
    setName("")
    dispatch(signup(obj))
   alert("Registered successfully!")
navi("/login")
  }

  return (
    
    <div>
<Nav/>  <h1 className="text-white text-5xl p-4 pt-8 "style={{ backgroundColor: '#01111d' }}> Register Your Account Here</h1>

<div style={{ backgroundColor: '#01111d' }} className='py-16' >
<form className="w-1/2 bg-pink-50 mx-auto flex flex-col p-8 rounded-lg" onSubmit={handleClick} action="">
  <label className="mb-2 text-black text-2xl">Email</label>
  <input type="email" placeholder="Enter your Email..." onChange={(e)=>{setEmail(e.target.value)}} className="mb-4 py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />

  <label className="mb-2  text-black text-2xl">Username</label>
  <input type="text" placeholder="Enter your username..."onChange={(e)=>{setName(e.target.value)}}  className="mb-4 py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />

  <label className="mb-2  text-black text-2xl">Password</label>
  <input type="password" placeholder="Enter Password..." onChange={(e)=>{setPass(e.target.value)}}  className="mb-4 py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
  <input style={{ backgroundColor: '#071a2a', color: 'white' }}  type="submit" placeholder="Register" className="mb-4 py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
</form>

</div>
    </div>
  )
}

export default Signup