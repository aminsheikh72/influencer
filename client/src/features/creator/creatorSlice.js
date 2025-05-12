import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const creatorSlice = createSlice({
    name : "",
    initialState : {
          creators : [],
          isLoading : false,
          isSuccess : false,
          isError : false,
          message : ""
    },
    reducers : {},
    extraReducers : (builder) => {

    }
})


export const addCreators = createAsyncThunk("GET/CREATORS" , async(newCreator , thunkAPI)=>{

      let token = thunkAPI.getState().auth.user.token
      
      console.log(token);
    try {

        console.log(newCreator);
        
        
    } catch (error) {
        
    }
})