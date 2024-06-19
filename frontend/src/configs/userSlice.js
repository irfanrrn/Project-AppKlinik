import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            isLogin: false,
        }
    },
    reducers: {
        login: (state, action) => {
            state.user = {...action.payload, isLogin: true};
        },
        logout: (state) => {
            state.user = {isLogin: false};
        }
    }
});

export const {login} = userSlice.actions;
export const {logout} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;