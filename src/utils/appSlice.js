import {
  createSlice
} from '@reduxjs/toolkit';


const appSlice = createSlice({
  name: 'app',
  initialState: {
    isSideBarOpen: true,
    searchQuery: ''
  },
  reducers: {
    toggleSideBar(state) {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    closeSideBar(state) {
      state.isSideBarOpen = false;
    },
    setSearchText(state, action) {
      state.searchQuery = action.payload;
    }
  }
})

export const {
  toggleSideBar,
  closeSideBar,
  setSearchText
} = appSlice.actions;

export default appSlice.reducer;