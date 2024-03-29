import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import Tasks from './Tasks'
import Private from './Private'
import EditTasks from './EditTasks'
import EditProfile from './EditProfile'
import AddTodo from '../Components/AddTodo'

const MainRoutes = () => {
  return <Routes>
    <Route path='/' element={<Home/>}> </Route>
    <Route path='*' element={"404 Not Found!!!"}> </Route>
    <Route path='/login' element={<Login/>}> </Route>
    <Route path='/signup' element={<Signup/>}> </Route>
    <Route path='/tasks' element={<Private><Tasks/></Private>}> </Route>
    <Route path='/tasks/edit/:id' element={<Private><EditTasks/></Private>}> </Route>

    <Route path='/profile/:id' element={<Private><EditProfile/></Private>}> </Route>

  </Routes>
}

export default MainRoutes