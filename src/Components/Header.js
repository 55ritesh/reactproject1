import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
   const dispatch = useDispatch();
  const toggleMenuHandler=()=>{
     dispatch(toggleMenu());
  };


  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
    <div className='col-span-1'>
       <img 
       onClick={()=>toggleMenuHandler()}
       className='h-8 cursor-pointer'
       src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg" alt="menu"/>
    </div>

    <div className='col-span-11 text-center'>
      <input className="w-1/2 border border-gray-600 p-2 rounded-l-full" type="text" />
       <button className='border border-gray-900 bg-slate-500 p-2 rounded-r-full'>Search</button>
    </div>
    <div>
      <img className='h-8 col-span-1' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />
    </div>
    </div>
  )
}

export default Header
