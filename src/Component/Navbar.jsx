import React from 'react'
import { useDispatch } from 'react-redux'
import { dataSearch } from '../Redux/SearchSlice'

const Navbar = () => {
  const dispatch=useDispatch();
  return (
   <>
    <div className="flex flex-col justify-between my-3 mx-6 lg:flex-row gap-6">
    <div>
      <h1 className='text-xl  text-gray-600 font-bold'>{new Date().toUTCString().slice(0,16)}</h1> 
      <span><h2 className='text-2xl  font-bold'>FoodNepal</h2></span>
</div>
<div className='flex flex-row justify-center  items-center'>
    <input type='text' placeholder='search here.. ' className='border border-gray-400 outline-none rounded-md p-3 mr-5 w-full lg:w-[25vw]' onChange={(e)=>dispatch(dataSearch(e.target.value))}/>
  
</div>
    </div>
   </>
  )
}

export default Navbar