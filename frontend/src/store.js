import { configureStore } from "@reduxjs/toolkit";
import userReducer from './configs/userSlice';

export const store = configureStore({
    reducer: {
        user: userReducer
    }
});