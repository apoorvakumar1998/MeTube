import React, { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_LIST_API, YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';

const Video = () => {

  const searchQuery = useSelector(store => store.app.searchQuery);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, [searchQuery])

  const getVideos = async () => {
    const response = await fetch(!searchQuery.length ? YOUTUBE_VIDEO_API : (YOUTUBE_SEARCH_LIST_API + searchQuery));
    const json = await response.json();
    setVideos(json.items);
  }

  return (
    <div className='flex flex-wrap gap-8 m-10'>
      {
        videos.map(video => {
          return <VideoCard key={video.id} info={video} />
        })
      }
    </div>
  )
}

export default Video