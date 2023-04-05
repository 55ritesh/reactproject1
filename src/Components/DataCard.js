import React,{useState} from 'react'
 import { Link } from 'react-router-dom';

const DataCard = ({info}) => {
        // console?.log(info);

  return (
     <div className='p-2 m-2 shadow-lg w-48'>
      
        <img className="rounded-lg" src={info?.show?.image?.medium ? info?.show?.image?.medium:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1"} alt="" /> 

       <h1 className='font-bold py-2'>{info?.show?.name}</h1>
       <h1>{info?.show?.id}</h1>
       <h1>{info?.show?.language}</h1>
       <h1>{info?.show?.averageRuntime}</h1> 
       <Link to={"/watch"} state={info?.show}><button className='px-5 py-2 m-1 bg-gray-400 rounded-lg'>Click</button></Link>
       {/* <button onClick={()=>{
        window.location.href='http://localhost:3000/watch'
       }}>clclcldlcllcll</button> */}
      
      
     </div>
  );
}

export default DataCard


