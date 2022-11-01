import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice ({
  name: 'order',
  initialState:  {
    favorite:[],
    
  },
  reducers: {


// Исходное состояние    
favoriteGame: (state,action) => {
  state.favorite = action.payload
},

// добавление в корзину массива игр

addFavoriteGame:(state, action) => {
  state.favorite.push(action.payload)
},


// удаление игр из корзины

removeGame:(state, action) => {
  state.favorite = state.favorite.filter(game => game.id!== action.payload)
},
  }

})

export const  {favoriteGame, addFavoriteGame,  removeGame} = favoriteSlice.actions
export default favoriteSlice.reducer