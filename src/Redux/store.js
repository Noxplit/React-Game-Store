import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './Cart/cartSlice'
import orderSlice from './Cart/orderSlice'

export const store = configureStore({
  reducer: {
    cartSlice,
    orderSlice
  },
})