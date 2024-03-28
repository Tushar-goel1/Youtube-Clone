
import { useSelector } from 'react-redux'
import VideoList from './VideoList';

const HistoryPage = () => {
  const HistoryVideoStore=useSelector((store)=>store.Storage.HistoryVideoStore);
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
  if(HistoryVideoStore.length===0){
    return(
      <div className={`w-screen h-screen ${isMenuOpen?'ml-56':'ml-20'}`} >
        <div className='mt-20 text-center font-serif  text-2xl' >
          WATCH HISTORY
        </div>
        <div className='text-3xl flex-wrap h-4/5 flex items-center justify-center'>Sorry There is No Video in Watch History</div>
      </div>
    )
  }
  return (
    <div className={`w-screen h-screen ${isMenuOpen?'ml-56':'ml-20'} `} >
      <div className='mt-20 text-center font-serif  text-2xl' >
        WATCH HISTORY
      </div>
      {
        HistoryVideoStore.map((H)=>(
          <VideoList key={H.id} info={H}/>
        ))
      }
    </div>
  )
}

export default HistoryPage