import React, { useState, useEffect } from 'react';
import FoodData from '../FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { setMenu } from '../Redux/MenuSlice';

const Menus = () => {
  const [category, setCategory] = useState([]);

  const listUnique = () => {
    const uniqueList = [...new Set(FoodData.map((data) => data.category))];
    setCategory(uniqueList);
  };

  useEffect(() => {
    listUnique();
  }, []);

const dispatch=useDispatch();
const selectedMenu=useSelector((state)=>state.Menu.menu)
  return (
    <>
      <div className='my-8 flex flex-col gap-3 mx-6'>
        <p className='text-xl font-semibold'>Find Your Favourite Food</p>
        <div className='flex flex-row gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>

        <button
              className={`px-3 py-2 font-bold border bg-gray-200 hover:bg-green-500 hover:text-white rounded-lg outline-none ${category==='All' && 'bg-green-500 lg:bg-green-500 text-white'}`}  onClick={()=>dispatch(setMenu("All"))}>All</button>
          {category.map((item, id) => (
            <button
              className={`px-3 py-2 font-bold border bg-gray-200  hover:text-white rounded-lg outline-none  hover:bg-green-600 ${selectedMenu===category && 'bg-green-500 lg:bg-green-500 text-white'}`}
              key={id}
              onClick={()=>dispatch(setMenu(item))}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menus;
