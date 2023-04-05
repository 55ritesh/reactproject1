import React from 'react'
import { useLocation} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Watch = () => {
    const {state}=useLocation();
    console.log(state.name);
    // const[name]=useState(state.name);
    
  return (
    <div>

       <h1 className='p-2 m-2 shadow-lg w-48'>{state.summary}</h1>
       <h2>{state.name}</h2>
       <Link to={"/form"} state={state.name}><button className='px-5 py-2 m-1 bg-gray-400 rounded-lg'>Click</button></Link>
    </div>
  )
}

export default Watch
