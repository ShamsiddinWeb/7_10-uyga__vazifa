import { configureStore } from '@reduxjs/toolkit'
import wishlistSlice from './wishlist/wishlistSlice'
import cartSlice from './carts/cartSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      wishlist: wishlistSlice,
      cart: cartSlice,
    },
  })
}