import React, { useEffect, useState } from 'react'
import Button from './Button'
import { YOUTUBE_VIDEO_CATEGORIES_API } from '../utils/constants'
import { useDispatch } from 'react-redux'

const ButtonsList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories();
  }, [])

  const getAllCategories = async () => {
    const response = await fetch(YOUTUBE_VIDEO_CATEGORIES_API);
    const json = await response.json();
    setCategories(json.items);
  }
  return (
    <div className='flex gap-2 m-4 flex-wrap'>
      {
        categories.map(button => {
          return <Button key={button.id} name={button.snippet.title} />
        })
      }
    </div>
  )
}

export default ButtonsList