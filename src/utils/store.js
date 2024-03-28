import { configureStore } from "@reduxjs/toolkit"
import appSlice from "./appSlice"
import searchSlice from "./searchSlice"
import chatSlice from "./chatSlice"
import storeageSlice from "./storeageSlice"
const store = configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        chat:chatSlice,
        Storage:storeageSlice,
    },
})

export default store