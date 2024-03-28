import React from "react";
import  ReactDOM  from "react-dom/client";
import Head from "./components/Head"
import { Provider } from "react-redux";
import store from "./utils/store";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body"
import WatchPage from "./components/WatchPage";
import VideoContainer from "./components/VideoContainer"
import dotenv from 'dotenv'
import HistoryPage from "./components/HistoryPage";
import LikePage from "./components/LikePage";

dotenv.config()
const App=()=>{
    return (
        <Provider store={store}>
        <>
        <Head/>
        <RouterProvider router={approutes}/>
        </>
        </Provider>
    )
}
const approutes=createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[
        {
            path:"/",
            element:<VideoContainer/>
        },
        {
            path:"watch",
            element:<WatchPage/>
        },
        {
            path:"HistoryPage",
            element:<HistoryPage/>
        },
        {
            path:"LikePage",
            element:<LikePage/>
        }
    ]
}])
const root=ReactDOM.createRoot(document.querySelector(".root"));
root.render(<App/>);