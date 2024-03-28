import React from 'react'
import axios from "axios";
import { LOGIN_FAILED, LOGIN_PENDING, LOGIN_SUCCESS } from './actionTypes';


export const signup = (obj)=>(dispatch) => {
    dispatch({type:LOGIN_PENDING})
axios.post("https://task-management-backend-3gib.onrender.com/user/register",obj).then((res)=>{
    dispatch({type:LOGIN_SUCCESS})
    console.log(res.data);
}).catch((err)=>{
    console.log(err.message);
    dispatch({type:LOGIN_FAILED})

})
}



export const login = (obj)=>(dispatch) => {
    dispatch({type:LOGIN_PENDING})
 axios.post("https://task-management-backend-3gib.onrender.com/user/login",obj).then((res)=>{
    dispatch({type:LOGIN_SUCCESS,payload:res.data.token})
    console.log(res.data);
}).catch((err)=>{
    console.log(err.message);
    dispatch({type:LOGIN_FAILED})
    alert("User not found!")

})
}
