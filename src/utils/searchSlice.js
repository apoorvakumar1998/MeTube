import {
  createSlice
} from '@reduxjs/toolkit';



const searchSlice = createSlice({
  name: 'searchSlice',
  initialState: {},
  reducers: {
    storeSearchCache(state, actions) {
      state = Object.assign(state, actions.payload)
    }
  }
})

export const {
  storeSearchCache
} = searchSlice.actions;

export default searchSlice.reducer;