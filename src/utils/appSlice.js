import { createSlice } from "@reduxjs/toolkit"
const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        isHomePage:true,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen
            state.isHomePage=true;
        },
        toggleWatch:(state)=>{
            state.isHomePage=false;
            state.isMenuOpen=false;
        },
    },
});
export default appSlice.reducer
export const {toggleMenu,toggleWatch} = appSlice.actions