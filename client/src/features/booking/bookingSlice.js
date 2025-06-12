import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bookingService from "./bookingService";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    bookings: [],
    booking: {},
    edit: { booking: {}, isEdit: false },
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
  },

  reducers: {
    editBooking: (state, action) => {
      return {
        ...state,
        edit: { booking: action.payload, isEdit: true },
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllBookings.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })

      .addCase(getAllBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.bookings = action.payload;
      })

      .addCase(getAllBookings.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(updateBookingDetails.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(updateBookingDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bookings = state.bookings.map((booking) =>
          booking._id === action.payload._id ? action.payload : booking
        );
        state.message = "Booking updated successfully";
      })

      .addCase(updateBookingDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false
        state.isError = true;
        state.message = action.payload || "Failed to update booking";
      });
  },
});

export default bookingSlice.reducer;

export const getAllBookings = createAsyncThunk(
  "GET/BOOKING",
  async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token;

    try {
      return bookingService.allBookings(token);
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateBookingDetails = createAsyncThunk(
  "BOOKING/UPDATE",
  async (formData, thunkAPI) => {

    
    
    let token = thunkAPI.getState().auth.user.token;
    
     
      
    try {
      return bookingService.updateBooking(formData, token);
    } catch (error) {
      console.log(error);
    }
  }
);
