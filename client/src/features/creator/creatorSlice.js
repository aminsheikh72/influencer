import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import creatorService from "./creatorService";

const creatorSlice = createSlice({
  name: "creator",
  initialState: {
    creators: [],
    allCreators: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCreators.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })

      .addCase(addCreators.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.creators = [action.payload, ...state.creators];
        state.isError = false;
      })

      .addCase(addCreators.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(updateCreator.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })

      .addCase(updateCreator.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.creators = state.creators.map((creator) =>
          creator._id === action.payload._id ? action.payload : creator
        );
        state.isError = false;
      })

      .addCase(updateCreator.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(removeCreator.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })

      .addCase(removeCreator.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.creators = state.creators.filter((creator)=> creator._id !== action.payload.id)
        state.isError = false;
      })

      .addCase(removeCreator.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getAllCreators.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })

      .addCase(getAllCreators.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allCreators = action.payload;
        state.isError = false;
      })

      .addCase(getAllCreators.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default creatorSlice.reducer;

export const addCreators = createAsyncThunk(
  "ADD/CREATORS",
  async (newCreator, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token;

    try {
      return await creatorService.creator(token, newCreator);
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "Something went wrong";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateCreator = createAsyncThunk(
  "UPDATE/CREATORS",
  async (formData, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token;

    try {
      return await creatorService.update(token, formData);
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "Something went wrong";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const removeCreator = createAsyncThunk(
  "REMOVE/CREATOR",
  async (id, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token;

    try {
      return await creatorService.remove(token, id);
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "Something went wrong";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getAllCreators = createAsyncThunk(
  "GET/CREATOR",
  async (_, thunkAPI) => {
    try {
      return await creatorService.getCreators();
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "Something went wrong";
      return thunkAPI.rejectWithValue(message);
    }
  }
);
