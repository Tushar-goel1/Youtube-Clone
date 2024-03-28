import React from 'react';
import GetTimeDiff from '../const/GetTimeDiff';
import { useSelector } from 'react-redux';
import { formatViewCount } from '../const/RandomGen';

const VideoCard = ({info}) => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  if(!info)return null;
  const {snippet,statistics}=info;
  const {channelTitle,thumbnails,title,publishedAt}=snippet;

   return (
    <div className={`${isMenuOpen?'w-[400px] ':'w-[330px] '}  h-[365px] m-3  rounded-lg`}>
      <img className={`${isMenuOpen?'w-[400px]':'w-[330px]'} rounded-lg`} alt="video" src={thumbnails.medium.url}/>
      <div className='flex pt-1 ml-1 '>
        <div className='w-12'>
          <img className="pl-2 h-9 w-10" alt="video icon"
            src="https://static-00.iconduck.com/assets.00/youtube-with-circle-icon-512x512-8d9e1ve7.png"/>
        </div>
        <div className='w-full'>
          <h3 className="font-bold">{title.slice(0,65)+ (title.length>65?"...":"")}</h3>
          <h3 >{channelTitle}</h3>
          <h4 >{formatViewCount(statistics.viewCount,2)} views • <GetTimeDiff uploadDate={publishedAt} /></h4>
        </div>
      </div>
    </div> 
  )
} 

export default VideoCard