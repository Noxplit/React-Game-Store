import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice ({
  name: 'search',
  initialState:  {
   search: '',
    
  },
  reducers: {

searchGame:(state, action) => {
  state.search = action.payload
}
  }

})

export const  {searchGame} = searchSlice.actions
export default searchSlice.reducer