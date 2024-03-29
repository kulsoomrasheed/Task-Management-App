import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTask, getTasks } from '../redux/taskReducer/action'

const TodoItem = ({status,desc,_id,title}) => {
  const dispatch=useDispatch()
  const handleDelete=(_id)=>{
    dispatch(deleteTask(_id))
    dispatch(getTasks)
  }
  return (
    <div>
 <table className='border-collapse border-2 border-gray-700 mx-auto w-5/6'>
  <tbody>
    <tr>
      <th scope="row" className="border border-gray-600 py-4 px-6 text-center" style={{width: '25%'}}>{title}</th>
      <td className="border border-gray-600 py-4 px-6 text-center" style={{width: '25%'}}>{desc}</td>
      <td className="border border-gray-600 py-4 px-6 text-center" style={{width: '25%'}}>{status ? "Completed" : "Pending"}</td>
      <td className="border border-gray-600 py-4 px-6 text-center" style={{width: '12.5%'}}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link to={`edit/${_id}`}>Edit</Link>
        </button>
      </td>
      <td className="border border-gray-600 py-4 px-6 text-center" style={{width: '12.5%'}}>
        <button onClick={() => handleDelete(_id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      </td>
    </tr>
  </tbody>
</table>

</div>

  )
}

export default memo(TodoItem) 