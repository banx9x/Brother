import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
});

const baseService = createApi({
    reducerPath: "baseService",
    baseQuery,
    endpoints: () => ({}),
});

export default baseService;
