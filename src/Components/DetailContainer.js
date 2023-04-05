import React, { useEffect,useState } from 'react'
import { Application_API } from '../utils/constants';
import DataCard from './DataCard';
import { Link } from 'react-router-dom';
import Watch from './Watch';

const DetailContainer = () => {

  const [dataa,setDataa]=useState([]);
  useEffect(()=>{
       getData();
  },[]);
  const getData = async()=>{
     const data=await fetch(Application_API);
     const json = await data.json();
     setDataa(json);
  }
 
  return (
    <div className='flex flex-wrap'>
     {dataa.map((e,index)=>
     <DataCard key={index} info={e}/>
     )
    }
       {/* {dataa.map((e)=>(
       <DataCard key={e.show.id} {...e.show}
       />)  */}
       
      
      
    </div>
  )
}

export default DetailContainer
