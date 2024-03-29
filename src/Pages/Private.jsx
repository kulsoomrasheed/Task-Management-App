import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import Login from './Login'

const Private = ({children}) => {
  const auth= useSelector((store)=>store.authReducer.auth)
  const location = useLocation()
  return auth? children:<Navigate state={location.pathname} to={"/login"}/>
}

export default Private