import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
  name: 'cart',
  initialState:  {
    itemGame:[],
    itemsInCart: [],
    value: '',
    sorted: '',
    sortedGenre: '',
    discription: ''
   
  },
  reducers: {
addToCartItem:(state , action) => {
state.itemsInCart.push(action.payload) 
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
categoryCart:(state, fillter) => {
  switch (fillter) {
    case 'Все':
      return state.itemsInCart;
      case 'По цене': return state.itemsInCart.filter((a,b) =>  a > b);
  
    default:
      return state;
  }
}


  }

})

export const  {addToCartItem, deleteAtCartItem, fillterCart, categoryCart, itemGames, sortedCart, sortedGenres, addDiscription } = cartSlice.actions
export default cartSlice.reducer