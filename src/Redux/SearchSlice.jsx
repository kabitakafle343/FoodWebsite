import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:'search',
    initialState:{
        search:''
    },
    reducers:{
       dataSearch: (state,action)=>{
state.search = action.payload;
    }}
})
export const {dataSearch}=searchSlice.actions;
export default searchSlice.reducer;
