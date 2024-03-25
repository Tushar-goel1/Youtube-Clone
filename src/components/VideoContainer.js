import React, { useEffect, useState } from 'react'
import Youtube_Video_API from "../const/Apis"
import VideoCard from './VideoCard';
import { Link} from 'react-router-dom';

const VideoContainer = () => {
  const [video,setVideo]=useState([]);
  useEffect(()=>{
    getvideofunc();
  },[]);

  const getvideofunc=async()=>{
    const data=await fetch(Youtube_Video_API);
    const response= await data.json();
    setVideo(response.items);
  };

  return (
    <div className="flex flex-wrap pt-2 mt-16 -z-50 absolute cursor-pointer">
    
      {video && video.map((videos)=>(
        <Link key={videos.id} to={"/watch?v="+videos.id}>
        <VideoCard key={videos.id} info={videos}/>
        </Link>
      ))}
    </div>
  )
}

export default VideoContainer