import {  createAsyncThunk, createSlice  } from '@reduxjs/toolkit';
import axios from 'axios';
const ulr = 'https://api.covid19api.com/summary';

export const fetchSummary = createAsyncThunk('summary/fetchSummary', async () => {
    const res = await axios.get(ulr);
    console.log(res)
    return res.data.summary;
})

const initialState = {
   summary: [],
   status: 'idle',
   error: null,
   country: {}
};

const summarySlice = createSlice({
    name: 'summary',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSummary.pending, (state) =>({
            ...state,
            status: 'loading',
        } ));
        builder.addCase(fetchSummary.fulfilled, (state, action) => ({
            ...state,
            status: 'succesful',
            summary: action.payload,
          }));
          builder.addCase(fetchSummary.rejected, (state, action) => ({
            ...state,
            status: 'failed',
            error: action.error.message,
          }));
    }
})

export default summarySlice.reducer;
