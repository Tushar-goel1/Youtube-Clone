import React from 'react'
import Buttons from './Buttons'

const ButtonList = () => {
  const list=["All","cicket","music","mixes","footbal","comedy","anime","cartoons",
              "cicket","music","mixes","footbal","comedy","new to you"
            ];
  return ( 
      <div className="flex h-16 w-screen p-2  pt-4 fixed bg-white -z-10">
      <div className=' flex mx-2 w-4/5 pt-1 overflow-hidden '>
       {list.map((item,index)=>(
          <Buttons  key={index} name={item}/>
       ))}
       </div>

      </div>

  )
}


export default ButtonList