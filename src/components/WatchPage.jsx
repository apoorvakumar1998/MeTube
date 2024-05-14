import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeSideBar } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_VIDEO_DETAILS_API } from '../utils/constants';
import parse from 'html-react-parser';

const WatchPage = () => {

  const dispatch = useDispatch();
  const [videoDetails, setVideoDetails] = useState(null);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');

  const getVideoDetails = async () => {
    const response = await fetch(YOUTUBE_VIDEO_DETAILS_API + videoId);
    const json = await response.json();
    setVideoDetails(json.items[0]);
    console.log(json);
  }

  useEffect(() => {
    dispatch(closeSideBar())
    getVideoDetails();
  }, [videoId])
  return (
    <div className='m-10 flex flex-col gap-2 w-[70%]'>
      <iframe className='rounded-lg' width="100%" height="800" src={`https://www.youtube.com/embed/${videoId}?si=zQe7FyfDV_gYiY8m&autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <div className='font-extrabold text-2xl text-gray-600'>{videoDetails?.snippet?.localized?.title}</div>
      <div className='flex items-center justify-between'>
        <div className='font-extrabold text-xl text-gray-600'>{videoDetails?.snippet?.channelTitle}</div>
        <div className='font-extrabold text-xl text-gray-600'>{videoDetails?.statistics.viewCount} views</div>
      </div>
      <div className='border border-gray-300 rounded-lg p-4 bg-gray-100 font-medium'>{videoDetails && parse(videoDetails?.snippet?.localized?.description.replace(/\n/g, '<br />'))}</div>
    </div>
  )
}

export default WatchPage