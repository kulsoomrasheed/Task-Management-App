import React, { memo, useCallback, useState } from 'react'
import Nav from '../Components/Nav'
import TodoItem from '../Components/TodoItem'

const initstate = [
  {id:1,title:"Task1", status:false},
  {id:2,title:"Task2", status:false},
  {id:3,title:"Task3", status:false},

]

const Tasks = () => {
  const [title , setTitle]= useState("")
  const [todos, setTodos]= useState(initstate)
  const handleTodo=()=>{
const newTodo={
  id:Date.now()+Math.random()*100,
  title,
  status:false

}
setTodos([...todos,newTodo])
setTitle("")
  }

  const handleToggle=useCallback((id)=>{
    setTodos((prev)=>{
      return prev.map((el)=>{
  return el.id==id?{...el,status: !el.status}:el
})
    })

  },[])
  return (
    <div>
    <Nav/>
    <div  style={{ backgroundColor: '#01111d', color: 'white' }} className='py-12' >
  <input className='border border-gray-300 focus:outline-none' type="text" name="Enter Title" id=""  onChange={(e)=>setTitle(e.target.value)} value={title}/>
    <button onClick={handleTodo} className='text-black bg-pink-600' >Add</button>
    </div>
 
 <div  style={{ backgroundColor: '#01111d', color: 'white' }} className='p-18 pb-24'>
   {todos.map((el)=>{
return <TodoItem key={el.id} {...el} handleToggle={handleToggle}/>
  })}
    </div >
 </div>

  )
}

export default memo(Tasks)