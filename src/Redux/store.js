import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './Cart/cartSlice'
import orderSlice from './Cart/orderSlice'
import favoriteSlice from './Cart/favoriteSlice'

export const store = configureStore({
  reducer: {
    cartSlice,
    orderSlice,
    favoriteSlice
  },
})