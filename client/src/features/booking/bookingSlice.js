import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import bookingService from "./bookingService"

const bookingSlice = createSlice({
    name : "booking",
    initialState : {
        bookings : [],
        isLoading : false,
        isError : false,
        isSuccess : false,
        message : ""
    },

    reducers : {},
    
     extraReducers : (builder) => {

        builder
        .addCase(getAllBookings.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })

        .addCase(getAllBookings.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.bookings = action.payload
        })

        .addCase(getAllBookings.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
            

     }


})


export default bookingSlice.reducer


export const getAllBookings = createAsyncThunk("GET/BOOKING", async(_,thunkAPI) => {

    let token = thunkAPI.getState().auth.user.token
    console.log(token);


    try {

        return bookingService.allBookings(token)

    } catch (error) {
     
        console.log(error);
        
    }

})

