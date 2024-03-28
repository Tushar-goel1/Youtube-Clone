import React from 'react'
import GetTimeDiff from '../const/GetTimeDiff'

const Comments = ({info}) => {
  return (
    <div className='flex  my-4'>
        <img alt='Profile Photo'  className='w-8 h-8 rounded-2xl mx-2 mt-2.5 '
            src={info?.authorProfileImageUrl}
        />
        <div>
            <div>{info.authorDisplayName} {<GetTimeDiff uploadDate={info.publishedAt}/>}</div>
            <div className='flex flex-wrap'>
                {info.textDisplay}
            </div>
        </div>
    </div>
  )
}

export default Comments