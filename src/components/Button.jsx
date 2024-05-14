import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText } from '../utils/appSlice';

const SearchButton = ({ name }) => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.app.searchQuery);
  return (
    <button
      className={`border border-gray-300 p-1 px-2 rounded-lg text-sm ${searchQuery === name ? 'bg-gray-600 text-white' : 'bg-gray-200 text-black'}`}
      onClick={() => dispatch(setSearchText(name))}
    >
      {name}
    </button>
  );
};

export default SearchButton;
