import React from 'react'
import ButtonList from './ButtonList'
import { useSelector } from 'react-redux'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  return (
    <div className={`w-screen mt-14  pt-2 px-1.5 ${isMenuOpen?'ml-56':'ml-20'}`}>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer