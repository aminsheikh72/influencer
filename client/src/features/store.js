import { configureStore } from '@reduxjs/toolkit'
import auth from './auth/authSlice'
import user from "./user/userSlice"
import review from "./review/reviewSlice"
import creator from "./creator/creatorSlice"
import booking from "./booking/bookingSlice"


const store = configureStore({

  reducer: { auth, user , review , creator , booking },
  
})


export default store;
