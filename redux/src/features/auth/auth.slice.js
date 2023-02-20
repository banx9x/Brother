import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticate: false,
    user: null,
    token: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            return {
                isAuthenticate: true,
                user: action.payload.user,
                token: action.payload.token,
            };
        },
        logout() {
            return initialState;
        },
    },
});

export const authReducer = authSlice.reducer;
export const { login, logout } = authSlice.actions;

export const authSelector = (state) => state.auth;
