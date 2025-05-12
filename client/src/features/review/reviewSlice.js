import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userReview from "./reviewService";

const  reviewSlice = createSlice({
   name : "review",
   initialState :{
       reviews : [],
       
       isLoading : false,
       isSuccess : false,
       isError : false,
       message : ""   
   },
   reducers :{},
   extraReducers :(builder)=>{
      builder
      .addCase(getReviews.pending , (state , action) => {
          state.isLoading = true 
          state.isSuccess =false
          state.isError = false
      })
       .addCase(getReviews.fulfilled , (state , action) => {
          state.isLoading = false 
          state.isSuccess =true
          state.reviews = action.payload
          state.isError = false
      })
       .addCase(getReviews.rejected , (state , action) => {
          state.isLoading = false 
          state.isSuccess =false
          state.isError = true
          state.message = action.payload
      })
   }
})

export default reviewSlice.reducer


// get all reviews 

export  const getReviews = createAsyncThunk("GET/REVIEW" , async (_ , thunkAPI)=>{

     let token = thunkAPI.getState().auth.user.token
    console.log(token);
    
    try {
        return userReview.review(token)
    } catch (error) {
        console.log(error);
        
    }
} )