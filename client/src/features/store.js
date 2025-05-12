import { configureStore } from '@reduxjs/toolkit'
import auth from './auth/authSlice'
import user from "./user/userSlice"
import review from "./review/reviewSlice"


const store = configureStore({
  reducer: { auth, user , review },
})
export default store;
