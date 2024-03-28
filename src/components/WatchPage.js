import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  toggleLike, toggleShow, toggleWatch } from '../utils/appSlice';
import { useLocation, useSearchParams } from 'react-router-dom';
import LiveChat from './LiveChat';
import { RandomMessageGen, RandomNameGenerator, formatViewCount } from '../const/RandomGen';
import { chatMessage } from '../utils/chatSlice';
import GetTimeDiff from '../const/GetTimeDiff';
import Comments from './Comments';
import { YOUTUBE_COMMENTS_API } from '../const/Apis';
import { LikesVideos } from '../utils/storeageSlice';

const WatchPage = () => {

  const LikedVideoStore=useSelector((store)=>store.Storage.LikedVideoStore)
  const [searchParams]=useSearchParams();
  const [enterText,setEnterText]=useState("");
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
  const chatmessages=useSelector((store)=>store.chat.message)
  const ToShowMore=useSelector((store)=>store.app.ToShowMore)
  const [videos,setVideos]=useState();
  const [commentThreads,setCommentThreads]=useState()
  const dispatch=useDispatch();
  const videoData=useLocation();

  const getComments=async(v)=>{
    const commentsData=await fetch(YOUTUBE_COMMENTS_API+v);
    const responseData=await commentsData.json();
    setCommentThreads(responseData?.items);
  }

  useEffect(()=>{
    setVideos(videoData.state?.info)
    const VideoIdComments=(videoData.search?.slice(3));
    const timeperiod=setInterval(()=>{
        dispatch(chatMessage({
          name:RandomNameGenerator(),
          message:RandomMessageGen(12)
        }))
    },1000)
    getComments(VideoIdComments);
    dispatch(toggleWatch());
    return ()=>clearInterval(timeperiod);
  },[])

  return (

    <div className='flex w-screen h-screen flex-wrap'>
      <div className={` mt-20  ${isMenuOpen?'ml-56 w-[55%]':'ml-20 w-[62%]'} `}>
        <iframe className="mx-6 h-[66vh]  w-[95%] rounded-xl pt-1"
          src={"https://www.youtube.com/embed/"+searchParams.get("v") }
          title="YouTube video player" 
          allow=" autoplay; accelerometer; clipboard-write; 
          gyroscope; picture-in-picture; web-share" allowFullScreen>
        </iframe>

        <div className='mx-6 pt-4 mt-4'>
          <div className='font-bold font-sans'>{videos?.snippet?.title}</div>
          <div className='flex flex-wrap pt-2  '>
            <img className=" h-9 w-8" alt="video icon"
            src="https://static-00.iconduck.com/assets.00/youtube-with-circle-icon-512x512-8d9e1ve7.png"/>
            <div className='pt-1 px-3'>{videos?.snippet?.channelTitle}</div>
            <div className='pt-1 border bg-gray-300 w-24 rounded-2xl px-3 text-red-600'>Subscribe</div>
            <div className='pt-1 border bg-gray-200 rounded-xl w-fit px-2 ml-auto flex'>
              <button className='flex' onClick={()=>{
                dispatch(LikesVideos(videoData.state?.info))
              }}>
                {<img alt='like button' className='mt-0.5 h-5 w-6 mr-2' 
                src={LikedVideoStore.find((item)=>item.id==videoData.state?.info?.id)?'https://img.lovepik.com/element_origin_pic/18/06/13/8a4e23fb4677a6c9e7d1390f691ab28e.png_wh860.png':'https://www.picng.com/thumbnail/like/png_like_67240_small.png'}/>}
                {formatViewCount(videos?.statistics?.likeCount,0)}
              </button>
              {<img alt='dislike button' className='h-6 w-6 ml-6' 
              src='https://p2.hiclipart.com/preview/643/1009/185/like-icon-dislike-thumb-icon-social-icon-facebook-pack-icon-internet-logo-thumb-signal-blog-png-clipart.png'/>}
            </div>
          </div>

        <div className='bg-gray-100 rounded-lg pl-4 '>
          <div className='mt-2 '>{formatViewCount(videos?.statistics?.viewCount,1)} views • <GetTimeDiff uploadDate={videos?.snippet?.publishedAt}/></div>
          <div className='font-serif'>{
            ToShowMore ? (videos?.snippet?.description):(videos?.snippet?.description)?.slice(0,150) }
            <button className='font-semibold'
            onClick={()=>{
              dispatch(toggleShow())
            }}>
            {ToShowMore?'...less':'...more'}
            </button>
          </div>
          </div>
      
        </div>

        <div className='mx-6  pt-4'>
            <span className='font-bold text-xl'>{videos?.statistics?.commentCount} Comments</span>
            { commentThreads &&
              commentThreads.map((c)=>(
                
                <Comments key={c.id} info={c?.snippet?.topLevelComment?.snippet}/>
              ))
            }

        </div>
      </div>


      <div className='border box-border h-[65vh] border-black rounded-lg mt-[88px] ml-2 w-[22%]'>
        <div className='font-serif pl-8'>Live Chat</div>
        <div className=' h-[55vh] flex flex-col-reverse overflow-y-scroll'>
        {
          chatmessages.map((name,index)=>(
            <LiveChat key={index+ name.name} name={name.name} message={name.message}/>
          ))
        }
        </div>
        <form className=' mt-3 '
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