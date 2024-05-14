import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = ({ info }) => {
  return (
    <Link to={`/watch?v=${info.id.videoId || info.id}`} className='flex flex-col gap-2 w-[18%] hover:scale-105 hover:bg-gray-100 cursor-pointer hover:shadow-lg'>
      <img className='rounded-lg object-cover' alt='thumbnail' src={info.snippet.thumbnails.high.url} />
      <div className='font-bold text-xl px-2'>{info.snippet.title}</div>
      <div className='px-2'>{info.snippet.channelTitle}</div>
      {
        info.statistics && <div className='px-2'>{info.statistics.viewCount} views</div>
      }
    </Link>
  )
}

export default VideoCard