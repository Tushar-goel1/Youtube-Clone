import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  toggleWatch } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import LiveChat from './LiveChat';
import { RandomMessageGen, RandomNameGenerator } from '../const/RandomGen';
import { chatMessage } from '../utils/chatSlice';

const WatchPage = () => {
  const [searchParams]=useSearchParams();
  const [enterText,setEnterText]=useState("");
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
  const chatmessages=useSelector((store)=>store.chat.message)
  const dispatch=useDispatch();

  useEffect(()=>{
    const timeperiod=setInterval(()=>{
        dispatch(chatMessage({
          name:RandomNameGenerator(),
          message:RandomMessageGen(12)
        }))
    },1000)
    dispatch(toggleWatch());
    return ()=>clearInterval(timeperiod);
  },[])

  return (

    <div className='flex w-screen  '>
    <div className={`h-screen mt-20  ${isMenuOpen?'ml-56 w-[55%]':'ml-20 w-[62%]'} `}>
    <iframe className="mx-6 h-2/3 w-[95%] rounded-xl pt-1"
    src={"https://www.youtube.com/embed/"+searchParams.get("v") }
    title="YouTube video player" 
    allow=" autoplay; accelerometer; clipboard-write; 
     gyroscope; picture-in-picture; web-share" allowFullScreen>
    </iframe>
    </div>


    <div className='border h-[450px] border-black rounded-lg mt-[88px] ml-2 w-[22%] '>
         <div className='font-serif pl-8'>Live Chat</div>
        <div className=' h-[80%] flex flex-col-reverse overflow-y-scroll'>
        {
          chatmessages.map((name,index)=>(
            <LiveChat key={index+ name.name} name={name.name} message={name.message}/>
          ))
        }
        </div>
        <form className=' mt-3'
          onSubmit={(e)=>{e.preventDefault()
            dispatch(chatMessage({
              name:"Tushar",
              message:enterText
            })
            )
          setEnterText("")
          }} >
          
          <input className='w-[80%] mx-3  pl-2 border-b-2 outline-none' 
            type='text'
            placeholder='Chat...'
            value={enterText}
            onChange={(e)=>setEnterText(e.target.value)}
          />
          <button className='bg-gray-200 rounded-lg w-[10%]'>Go</button>
        </form>
    </div>
    </div>
  )
}

export default WatchPage