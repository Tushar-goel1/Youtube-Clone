import { createSlice } from '@reduxjs/toolkit'

const chatSlice = createSlice({
    name:'chat',
    initialState:{
        message:[]
    },
    reducers:{
        chatMessage:(state,action)=>{
            state.message.splice(25,1)
            state.message.unshift(action.payload);
        }
    }
});
export const {chatMessage}=chatSlice.actions
export default chatSlice.reducer
