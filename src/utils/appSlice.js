import { createSlice } from "@reduxjs/toolkit"
const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        isHomePage:true,
        ToShowMore:false,
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
        toggleShow:(state)=>{
            state.ToShowMore=!state.ToShowMore;
        }
    },
});
export default appSlice.reducer
export const {toggleMenu,toggleWatch,toggleShow} = appSlice.actions