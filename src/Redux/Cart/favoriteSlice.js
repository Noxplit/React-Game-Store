import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice ({
  name: 'order',
  initialState:  {
    favorite:[],
    
  },
  reducers: {

favoriteGame:(state, action) => {
  state.favorite.push(action.payload)
},
removeGame:(state,action) => {
  state.favorite.pop(action.payload)
}
  }

})

export const  {favoriteGame, removeGame} = favoriteSlice.actions
export default favoriteSlice.reducer