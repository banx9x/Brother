import { configureStore } from "@reduxjs/toolkit";
import baseService from "../services/base";

const store = configureStore({
    reducer: {
        [baseService.reducerPath]: baseService.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([baseService.middleware]),
});

export default store;
