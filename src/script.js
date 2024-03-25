import React from "react";
import  ReactDOM  from "react-dom/client";
import Head from "./components/Head"
import { Provider } from "react-redux";
import store from "./utils/store";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Body from "./components/Body"
import WatchPage from "./components/WatchPage";
import SearchVideoCard from "./components/SearchVideoCard";
import VideoContainer from "./components/VideoContainer"
import dotenv from 'dotenv'

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
            element:<MainContainer/>,
            children:[
                {
                    path:"/",
                    element:<VideoContainer/>
                },
                {
                    path:"search",
                    element:<SearchVideoCard/>
                }
            ]
        },
        {
            path:"watch",
            element:<WatchPage/>
        }
    ]
}])
const root=ReactDOM.createRoot(document.querySelector(".root"));
root.render(<App/>);