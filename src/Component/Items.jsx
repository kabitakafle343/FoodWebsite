import React from 'react'
import { FaStar } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/CartSlice';
import toast, { Toaster } from 'react-hot-toast';

const Items = ({id,name,img,des,price,rating}) => {
  const dispatch=useDispatch();
  const handleTost=()=>toast.success(` Added ${name}`)

  return (
  <>
  <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <div className='flex flex-col w-[250px] p-5 justify-center  gap-2 bg-white' id={id}>
      <img src={img} alt='food' className='w-auto h-[130px] hover:scale-110 transition-all duration-500 ease-in-out '/>
      <div className='flex flex-row justify-between'>
        <h3 className='text-lg font-bold '>{name}</h3>
        <span className='text-green-500 font-bold'>₹{price}</span>
      </div>
      <p className='text-sm font-normal'>{des.slice(0,55)}.....</p>
      <div className='flex flex-row justify-between items-center'>
      <div className='flex item-center justify-between'><span className='flex items-center justify-center'><FaStar className='text-yellow-400' />{rating}</span></div>
      
    <button className='iflex items-center justify-center bg-green-500 hover:bg-green-600 p-1 rounded-lg text-sm' onClick={()=>{dispatch(addToCart({id,name,price,img,qty:1})); handleTost();}} >Addto Cart</button>
      </div>
    </div>
  </>
  )
}

export default Items