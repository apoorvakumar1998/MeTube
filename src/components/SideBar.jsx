import React from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='w-48 shadow-lg p-6 h-auto transition-all'>
      <div className='py-4'>
        <Link to='/'>
          <h1 className='font-bold'>Home</h1>
        </Link>
        <h1 className='font-bold'>Shorts</h1>
        <h1 className='font-bold'>Subscription</h1>
      </div>
      <hr>
      </hr>

      <h1 className='font-bold py-4'>You</h1>
      <ul>
        <li>Your videos</li>
        <li>History</li>
        <li>Saved videos</li>
        <li>Liked videos</li>
      </ul>
    </div>
  )
}

export default SideBar