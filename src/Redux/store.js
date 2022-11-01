import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './Cart/cartSlice'
import searchSlice from './Cart/searchSlice'
import favoriteSlice from './Cart/favoriteSlice'

export const store = configureStore({
  reducer: {
    cartSlice,
    searchSlice,
    favoriteSlice
  },
})