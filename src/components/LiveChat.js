import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const LiveChat = ({name,message}) => {
  console.log(name,message);
  return (
    <div className='flex p-1 pl-1 m-1 font-sans'>
        <img className="h-7 w-7"
        alt="profile"
         src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
        />
        <span className='px-2 font-semibold'>{name + ":"}</span>
        <span>{message}</span>
    </div>
  )
}

export default LiveChat