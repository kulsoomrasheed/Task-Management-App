import React, { memo } from 'react'

const TodoItem = ({status,id,title,handleToggle}) => {
  return (
    <div>
  <table className='border-collapse border-2 border-gray-700 mx-auto'>
    <tbody>
      <tr>
        <th scope="row" className="border border-gray-600 py-8 px-10">{title}</th>
        <td className="border border-gray-600 py-8 px-10">Descert54y6u7i8u7y6tr54f</td>
        <td className="border border-gray-600 py-8 px-10 mw-16">{status ? "Completed" : "Pending"}</td>
        <td className="border border-gray-600 py-8 px-10"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleToggle(id)}>Toggle</button></td>
        <td className="border border-gray-600 py-8 px-10"><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" >Delete</button></td>
      </tr>
    </tbody>
  </table>
</div>

  )
}

export default memo(TodoItem) 