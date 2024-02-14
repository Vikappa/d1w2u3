import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../reducer/reducers'

export default configureStore({
  reducer: cartReducer,
})