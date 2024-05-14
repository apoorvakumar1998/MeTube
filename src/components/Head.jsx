import React, { useEffect, useState } from 'react'
import { HAMBURGER_URL, USER_AVATAR_URL, YOUTUBE_LOGO_URL, YOUTUBE_SUGGESTION_API } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { setSearchText, toggleSideBar } from '../utils/appSlice';
import { Link } from 'react-router-dom';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleSideBar())
  }

  const onSearchTextClick = (suggestion) => {
    setShowSuggestions(false);
    dispatch(setSearchText(suggestion));
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getSuggestions();
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    }
  }, [searchQuery])

  const clearSearchText = () => {
    setShowSuggestions(false);
    dispatch(setSearchText(''));
  }

  const getSuggestions = async () => {
    const response = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const json = await response.json();
    setSuggestions(json[1]);
  }

  const onEnterClick = (e) => {
    if (e.keyCode === 13) {
      setShowSuggestions(false);
      onSearchTextClick(e.target.value)
    }
  }

  return (
    <div className='flex items-center justify-between gap-6 shadow-lg p-2'>
      <div className='inline-flex gap-4 items-center w-1/4'>
        <img className='h-8 cursor-pointer' alt='hamburger' src={HAMBURGER_URL} onClick={toggle} />
        <Link to='/' className='cursor-pointer' onClick={clearSearchText}>
          <img className='h-16' alt='youtube-logo' src={YOUTUBE_LOGO_URL} />
        </Link>
      </div>
      <div className='w-1/2 inline-flex'>
        <input type='text' className='border border-black p-1 rounded-l-full w-10/12 pl-4'
          value={searchQuery}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => {
            setShowSuggestions(false)
          }, 200)}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => onEnterClick(e)} />
        {
          showSuggestions &&
          <ul className='absolute mt-12 bg-white rounded-lg w-[65rem] my-4 shadow-lg z-10'>
            {
              suggestions.map(suggestion => {
                return (
                  <li className='cursor-pointer hover:bg-gray-100' key={suggestion} onClick={() => onSearchTextClick(suggestion)}>
                    <div className='p-2 px-4'>{suggestion}</div>
                  </li>
                )
              })
            }
          </ul>
        }
        <button className='border border-black rounded-r-full p-2 px-4 bg-gray-200'>🔎</button>
      </div>
      <div className='w-1/4 justify-end inline-flex'>
        <img className='h-16' alt='user-avatar' src={USER_AVATAR_URL} />
      </div>
    </div>
  )
}

export default Head