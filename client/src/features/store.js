import { configureStore } from '@reduxjs/toolkit'
import creator from './fetchCreators/creatorSlice'
const store = configureStore({
  reducer: { creator},
})
export default store;