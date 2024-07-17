import React, { useEffect, useState } from 'react'
import LiveChatComments from './LiveChatComments'
import { useDispatch, useSelector } from 'react-redux'
import { updateMessages } from '../utils/chatSlice';
import { generateRandomChat, generateRandomName } from '../utils/helper';

const LiveChat = () => {

  const dispatch = useDispatch();

  const messages = useSelector(store => store.chat.messages);

  const [chatMessage, setChatMessage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(updateMessages({
        name: generateRandomName(),
        message: generateRandomChat()
      }))
    }, 5000);

    return () => {
      clearInterval(intervalId);
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateMessages({
      name: 'Apoorva',
      message: chatMessage
    }))
    setChatMessage('')
  }

  return (
    <>
      <div className='w-1/4'>
        <div className='mx-2 p-2 border border-black rounded-lg shadow-lg w-full bg-slate-100 h-[750px] overflow-auto flex flex-col-reverse'>
          {
            messages.map((message, index) => {
              return (
                <LiveChatComments key={index} name={message.name} comment={message.message} />
              )
            })
          }
        </div>
        <form className='w-full' onSubmit={handleSubmit}>
          <input className='m-2 p-2 border border-black rounded-lg' style={{
            width: 'calc(100% - 86px)'
          }} type='text' value={chatMessage} onChange={(e) => setChatMessage(e.target.value)}></input>
          <button className='border border-black p-2 rounded-lg'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default LiveChat