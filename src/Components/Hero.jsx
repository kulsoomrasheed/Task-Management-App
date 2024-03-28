import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (

    <div style={{ backgroundColor: '#01111d', color: 'white' }} className='py-28' >
<div className="flex w-5/6 mx-auto justify-between " >
     <div>
       <h1 className='text-7xl mx-5 mb-5'>
            One App <br /> <span className='text-rgb(1,181,240)'style={{ color: 'rgb(1, 181, 240)' }}>To Replace Them</span> <br /> <span  style={{color:"rgb(234,60,150)" }}>All Teams</span>
        </h1>
        <h1>Unlock Your Productivity Potential <br /> with Our Task Management App: Streamline Your <br />Workflow, Stay Organized, and Achieve More Every Day!</h1>
       <Link to={'/signup'}>
       <button className="p-2 my-8 rounded-md" style={{backgroundColor:"rgb(234,60,150)" , color:"white"}}>Get Start Free</button>
    
       </Link>
       </div>
       <div><img src="dash.png" alt="" /></div>
</div>
      
    </div>
  )
}

export default Hero