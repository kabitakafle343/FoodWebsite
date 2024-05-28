import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from 'react-redux';
import { removeCart } from '../Redux/CartSlice';
import { increment,decrement} from '../Redux/CartSlice';
import toast from 'react-hot-toast';


const Carts = () => {
    const [active, setActive] = useState(false);
    const datas = useSelector((state) => state.AllProducts.product);
    console.log(datas)
    const dispatch = useDispatch();

    const toggleCart = () => {
        setActive(!active);
    };

    const toatalCost=datas.reduce((acc, item) =>acc+item.qty*item.price,0)

    return (
        <>
            <div className={`w-full h-full lg:w-[20vw] bg-white top-0 right-0 fixed transform transition-all duration-300 ${active ? 'translate-x-0' : 'translate-x-full'}`} style={{ zIndex: 100 }}>
                <span className="absolute right-4 top-4 cursor-pointer" onClick={toggleCart}>
                    <RxCross2 size={24} />
                </span>
                {datas.length > 0 ? (
                    <>
                        <h4 className='absolute top-2 p-2 font-normal text-lg'>My Orders:</h4>
                        <div className='overflow-y-auto mt-12'>
                            {datas.map((data, index) => (
                                <div className='flex flex-row justify-between items-center p-2 my-3 shadow-md' key={index}>
                                    <img src={data.img} alt='img' className='w-[180px] lg:w-[90px]' />
                                    <div className=''>
                                        <h2 className='text-lg font-bold'>{data.name}</h2>
                                        <span className='text-green-500 font-bold'>₹{data.price}</span>
                                    </div>
                                    <div className='flex flex-col items-center gap-1 '>
                                        <span className='cursor-pointer' onClick={() => {dispatch(removeCart(data.id));toast(`${data.name} Removed`,{icon:"👋"})}}><MdDelete size={24} /></span>
                                        <div className='flex flex-row gap-2'>
                                            <button className='py-[1px] px-1 border border-gray-300 hover:text-white hover:border-none hover:bg-green-500' onClick={()=>{ dispatch(increment(data.id))}}>+</button>
                                            <span>{data.qty}</span>
                                            <button className='py-[1px] px-1 border border-gray-300 hover:text-white hover:border-none hover:bg-green-500' onClick={()=>{data.qty>1 ? dispatch(decrement(data.id)):null}}>-</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='absolute bottom-0 p-5 w-full'>
                            <p className='font-semibold text-gray-800'>Items:{datas.length} </p>
                            <h2 className='font-semibold text-gray-800'>Total Amount:₹{toatalCost}</h2>
                            <div>
                                <button className='bg-green-500 w-full lg:w-[19vw] px-3 py-2 mb-5 rounded-lg font-bold'>Checkout</button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='flex justify-center items-center h-full'>
                        <p className='font-semibold text-gray-800'>Cart is empty</p>
                    </div>
                )}
            </div>
            <FaCartShopping className={`text-5xl fixed rounded-full right-5 bottom-4 shadow-md bg-white p-3 cursor-pointer ${datas.length>0 && 'animate-bounce transition-all duration-600'}` } style={{ zIndex: 50 }} onClick={toggleCart} />
        </>
    );
};

export default Carts;




