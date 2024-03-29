import React, { memo, useState } from 'react'
import Nav from '../Components/Nav'
import { handlePatch } from '../redux/taskReducer/action'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const EditProfile = () => {
    const [email,setEmail]= useState("")
    const [pass,setPass]= useState("")
    const [username,setName]= useState("")
    const [oldUsername,setOldUsername]= useState("")
    const [olddata, setOldData]= useState([])
    const {id}=useParams()

    

    const obj={email,username,pass}
    const dispatch=useDispatch()
  const navi= useNavigate()
  

  
  const handleClick=(e)=>{
e.preventDefault()
const obj={email,username,pass}
dispatch(handlePatch(id,obj))
setEmail("")
      setPass("")
      setName("")
      alert("Updated successfully!")
      navi("/tasks")
  }
  return (
 
    <div>
<Nav/>  <h1 className="text-white text-5xl p-4 pt-8 "style={{ backgroundColor: '#01111d' }}> </h1>

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

export default memo(EditProfile)