import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../auth/auth.slice";
import { counterReducer } from "../counter/counter.slice";
import baseService, { postService } from "./service";

const store = configureStore({
    reducer: {
        [baseService.reducerPath]: baseService.reducer,
        [postService.reducerPath]: postService.reducer,
        auth: authReducer,
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            baseService.middleware,
            postService.middleware,
        ]),
});

export default store;
