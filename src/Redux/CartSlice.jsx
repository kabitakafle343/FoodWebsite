import { createSlice } from "@reduxjs/toolkit";
const CartSlice=createSlice({
    name:"cart",
    initialState:{
        product:[]
    },
    reducers:{
        addToCart:(state,action)=>{

            const findExists=state.product.find((item)=>item.id === action.payload.id);

            if(findExists){
                state.product= state.product.map((item)=>item.id === action.payload.id? {...item,qty:item.qty + 1}:item);
            }else{
                
state.product.push({...action.payload,qty:1});
            }

            
        },
        removeCart:(state,action)=>{
            state.product= state.product.filter((item)=>item.id!==action.payload)
        },

        increment:(state,action)=>{
            state.product= state.product.map((item)=>item.id===action.payload?{...item,qty:item.qty+1}:item);
        },
        decrement:(state,action)=>{
            state.product= state.product.map((item)=>item.id===action.payload?{...item,qty:item.qty-1}:item);
        },

    }
})
export const{addToCart, removeCart,increment,decrement}=CartSlice.actions;
export default CartSlice.reducer;