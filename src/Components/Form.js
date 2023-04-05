import React from 'react'
import { useLocation } from 'react-router-dom'

const Form = () => {
    const {state}=useLocation();
    console.log(state);

  return (
<div className='px-24 py-24 mx-24 my-24 shadow-lg w-96 col-sp'>
    <form>
      <div className='border-gray-700 px-2 py-2'>
       <label className='font-bold py-2 px-2'>Movie Name : </label>
       <input className="py-2 px-2 border border-gray-600" type="text"   placeholder={state}/>
      </div>
     <div className="form-group px-2 py-2">
       <label className='font-bold py-2 px-2'>Ticket Price:</label>
       <input className="py-2 px-2 border border-gray-600" type="number" placeholder="Price"/>
     </div>
    <div className="form-group form-check px-2 py-2">
       <input className="py-2 px-2 border border-gray-600 " type="checkbox" />
       <label className='font-bold py-2 px-2'>Check me out</label>
    </div>
     <button className="bg-gray-500 rounded-lg px-2 py-2 m-2" >Submit</button>
    </form>
</div>
  )
}

export default Form

