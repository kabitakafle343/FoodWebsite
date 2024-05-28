import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice"
import MenuSlice from "./MenuSlice"
import searchSlice from "./SearchSlice"
const store=configureStore({
    reducer:{
        AllProducts:CartSlice,
        Menu:MenuSlice,
        search:searchSlice,
    }
})
export default store;