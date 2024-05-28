import React from 'react'
import Items from './Items'
import FoodData from '../FoodData'
import { useSelector } from 'react-redux'



const TotalItems = () => {
  const selectedMenu=useSelector((state)=>state.Menu.menu);
  const search=useSelector((state)=>state.search.search)
  return (
<>
<div className='flex flex-row gap-6 flex-wrap justify-center lg:justify-start mx-6'>
{FoodData.filter((item)=>{
  if(selectedMenu==="All"){
    return item.name.toLowerCase().includes(search.toLowerCase());
  }else{
 return (selectedMenu===item.category && item.name.toLowerCase().includes(search.toLowerCase()));
  }
}).map((data,index)=>{
  return(
   
    <Items  key={index} name={data.name} id={data.id} price={data.price} des={data.desc} rating={data.rating} img={data.img} cat={data.category}/>
  
  )
})}

</div>
 


</>
  )
}

export default TotalItems