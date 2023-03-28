import { configureStore } from '@reduxjs/toolkit';
import summaryReducer from './DetailsSlice/DetailsSlice'

const store = configureStore({
    reducer: {
        summary: summaryReducer,
    }
})
export default store;