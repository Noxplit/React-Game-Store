import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
  name: 'cart',
  initialState:  {
    itemGame:[],
    itemsInCart: [],
    value: '',
    sorted: '',
    sortedGenre: '',
    discription: '',
  },
  reducers: {
addToCartItem:(state , action) => {
state.itemsInCart.push(action.payload) 
},
removeCartItem:(state , action) => {
  state.itemsInCart = state.itemsInCart.filter(game => game.id!== action.payload)
},

buyGameInCart : (state , action) => {
  state.itemsInCart = action.payload
},


fillterCart: (state, action) => {
  state.value = action.payload
},
addDiscription: (state, action) => {
  state.discription = action.payload
},
sortedCart: (state, action) => {
  state.sorted = action.payload
},
itemGames: (state, action) => {
  state.itemGame = action.payload
},
sortedGenres: (state, action) => {
  state.sortedGenre = action.payload
},


  }

})

export const  {addToCartItem, deleteAtCartItem, fillterCart, buyGameInCart,  itemGames, sortedCart, removeCartItem, sortedGenres, addDiscription } = cartSlice.actions
export default cartSlice.reducer