import { useSelector } from 'react-redux'
import VideoList from './VideoList';

const LikePage = () => {
  const LikedVideoStore=useSelector((store)=>store.Storage.LikedVideoStore);
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
  if(LikedVideoStore.length===0){
    return(
      <div className={`w-screen h-screen ${isMenuOpen?'ml-56':'ml-20'}`} >
        <div className='mt-20 text-center font-serif  text-2xl' >
          LIKE VIDEOS
        </div>
        <div className='text-3xl flex-wrap h-4/5 flex items-center justify-center'>Sorry There is No Video in Like Videos</div>
      </div>
    )
  }
  return (
    <div className={`w-screen h-screen ${isMenuOpen?'ml-56':'ml-20'} `} >
      <div className='mt-20 text-center font-serif  text-2xl' >
        LIKE VIDEOS
      </div>
      {
        LikedVideoStore.map((H)=>(
          <VideoList key={H.id} info={H}/>
        ))
      }
    </div>
  )
}

export default LikePage