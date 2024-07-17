import React from 'react'
import { USER_AVATAR_URL } from '../utils/constants'

const LiveChatComments = ({ name, comment }) => {
  return (
    <div className='flex gap-2 items-center my-2'>
      <img className='h-8' alt='user-avatar' src={USER_AVATAR_URL} />
      <span className='font-bold text-xl'>{name}</span>
      <span>{comment}</span>
    </div>
  )
}

export default LiveChatComments