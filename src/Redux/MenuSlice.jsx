import { createSlice } from "@reduxjs/toolkit";
const MenuSlice=createSlice({
    name:"menu",
    initialState: {
        menu:"All"
    },
    reducers:{
        setMenu:(state,action)=>{
          state.menu = action.payload;  
        },
    }
})
export const {setMenu} = MenuSlice.actions;
export default MenuSlice.reducer;
