import React from 'react'
import GetTimeDiff from '../const/GetTimeDiff';
import { formatViewCount } from '../const/RandomGen';
import { Link } from 'react-router-dom';

const VideoList = ({info}) => {
    const {snippet,statistics}=info;
    const {channelTitle,thumbnails,title,publishedAt,description}=snippet;
    return (
        <Link to={"/watch?v="+info.id} state={{info:info}}>
        <div className='flex mx-20 my-7'>
            <img className={` rounded-lg`} alt="video" src={thumbnails.medium.url}/>
            <div className='flex pt-1 m-2 mx-4 flex-col text-sm'>
                <h3 className="font-bold text-lg">{title.slice(0,65)+ (title.length>65?"...":"")}</h3>
                <h3 className=' font-sans my-2'>{channelTitle}
                <span className=' ml-2'>{formatViewCount(statistics.viewCount,2)} views • <GetTimeDiff uploadDate={publishedAt} /></span></h3>
                <h3 className='flex-wrap flex '>{description.slice(0,200)}...</h3>  
            </div>
        </div>
        </Link>
    )
}

export default VideoList