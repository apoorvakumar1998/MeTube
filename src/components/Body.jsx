import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Body = () => {

  const isSideBarOpen = useSelector((state) => state.app.isSideBarOpen);
  return (
    <div className='flex height-screen'>
      {
        isSideBarOpen && <SideBar />
      }
      <Outlet />
    </div>
  )
}

export default Body