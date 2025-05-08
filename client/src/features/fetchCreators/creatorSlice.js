
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchService from "./fetchService";

const creatorSlice = createSlice({
  name: "creator",
  initialState: {
    creators: [],
    creator: {},
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ""
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCreators.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCreators.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.creators = action.payload; // 🔥 important line
      })
      .addCase(getCreators.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      });
  }
});
export const getCreators=createAsyncThunk("FETCH/CREATORS",async()=>{
    try {
        await fetchService.fetchCreators()
    } catch (error) {
        console.log(error.message);
        
        
    }
})
export default creatorSlice.reducer;
