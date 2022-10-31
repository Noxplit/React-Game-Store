import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice ({
  name: 'order',
  initialState:  {
    currentGame: null,
    
  },
  reducers: {

setCurrentGame:(state, action) => {
  state.currentGame = action.payload
}
  }

})

export const  {setCurrentGame} = orderSlice.actions
export default orderSlice.reducer