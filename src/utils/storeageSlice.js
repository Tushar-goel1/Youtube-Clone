import { createSlice } from "@reduxjs/toolkit"

const storeageSlice =createSlice({
    name:"Storage",
    initialState:{
        LikedVideoStore:[],
        HistoryVideoStore:[],
    },
    reducers:{
        LikesVideos:(state,action)=>{
            const videoExists = state.LikedVideoStore.some(video => video.id === action.payload.id);
            if(!videoExists){
                state.LikedVideoStore.slice(15,1);
                state.LikedVideoStore.unshift(action.payload);
            }
            else{
                state.LikedVideoStore.pop(action.payload);
            }
        },
        HistoryVideos:(state,action)=>{
            const videoExists = state.HistoryVideoStore.some(video => video.id === action.payload.id);
            if(!videoExists){
                state.HistoryVideoStore.slice(15,1)
                state.HistoryVideoStore.unshift(action.payload)
            }
            
        }
    }
})

export const {LikesVideos,HistoryVideos}=storeageSlice.actions
export default storeageSlice.reducer