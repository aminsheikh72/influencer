import { configureStore } from '@reduxjs/toolkit'
import auth from './auth/authSlice'
import user from "./user/userSlice"


const store = configureStore({
  reducer: { auth, user},
})
export default store;
