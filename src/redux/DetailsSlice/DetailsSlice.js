import {  createAsyncThunk, createSlice  } from '@reduxjs/toolkit';
import axios from 'axios';
const ulr = 'https://api.covid19api.com/summary';

export const fetchSummary = createAsyncThunk('summary/fetchSummary', async () => {
    const res = await axios.get(ulr);
    console.log(res)
    return res.data.Countries;
})

const initialState = {
   searchvalue: '', 
   summary: [],
   status: 'idle',
   error: null,
   country: {}
};

const summarySlice = createSlice({
    name: 'summary',
    initialState,
    reducers: {
        handleChange: (
            state,action
        ) => {return{...state,searchvalue: action.payload}},

        filteritem: (
            state
        ) => {
            const newsummary = state.summary.filter(item => item.Country.includes (state.searchvalue))
            return{...state, summary:newsummary}
    },

    },
    
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
export const {handleChange, filteritem}=summarySlice.actions
export default summarySlice.reducer;
