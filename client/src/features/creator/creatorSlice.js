import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import creatorService from "./creatorService";

const creatorSlice = createSlice({
    name : "creator",
    initialState : {
          creators : [],
          allCreators : [],
          isLoading : false,
          isSuccess : false,
          isError : false,
          message : ""
    },
    reducers : {},
    extraReducers : (builder) => {

        builder
        .addCase(addCreators.pending, (state, action) => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        })

         .addCase(addCreators.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.creators = action.payload 
            state.isError = false
        })

         .addCase(addCreators.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })


         .addCase(getAllCreators.pending, (state, action) => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        })

         .addCase(getAllCreators.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.allCreators = action.payload 
            state.isError = false
        })

         .addCase(getAllCreators.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })


    }
})


export default creatorSlice.reducer


export const addCreators = createAsyncThunk("GET/CREATORS" , async(newCreator , thunkAPI)=>{

      let token = thunkAPI.getState().auth.user.token
      
    try {

        return await creatorService.creator(token, newCreator)
        
    } catch (error) {
        console.log('Error');
        
    }
})


export const getAllCreators = createAsyncThunk("GET/CREATOR", async(_, thunkAPI) => {

    try {
        return await creatorService.getCreators()
    } catch (error) {
     console.log(error);
        
    }

})