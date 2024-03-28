import React from 'react'
import Buttons from './Buttons'
import { useSelector } from 'react-redux';

const ButtonList = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
  const list=["All","cicket","music","mixes","footbal","comedy","anime","cartoons",
              "cicket","music","mixes","footbal","comedy","new to you","Beautiful","Russia",
              "IPL","War","Match","News"
            ];
  return ( 
      <div className="flex h-16 w-screen p-2  pt-4 fixed bg-white -z-10">
      <div className={`flex mx-2 ${isMenuOpen?'w-4/5':'w-[90%]'} pt-1 overflow-scroll scrollbar-w-0`}>
       {list.map((item,index)=>(
          <Buttons  key={index} name={item}/>
       ))}
       </div>

      </div>

  )
}


export default ButtonList