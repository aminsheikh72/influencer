import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "./userService";

const userSlice = createSlice({
    name : "user",
    initialState : {
        users : [],
        isLoading : false,
        isError : false,
        isSuccess : false,
        message : "",
    },

    reducers : {},
    extraReducers : (builder) => {
            builder
            .addCase(getUser.pending, (state, action) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })

            .addCase(getUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.users = action.payload
                state.isError = false
            })

            .addCase(getUser.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            

    } 
})


export default userSlice.reducer


export const getUser = createAsyncThunk("GET/USER", async(_, thunkAPI) => {

    let token = thunkAPI.getState().auth.user.token
    console.log(token);
    

    try {
        return userService.user(token)
    } catch (error) {
        console.log("error");
        
    }

})

