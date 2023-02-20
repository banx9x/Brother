import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Nhiệm vụ khai báo đường dẫn chung cho endpoints
// Inject headers chung
const baseGameQuery = fetchBaseQuery({
    baseUrl: "https://free-to-play-games-database.p.rapidapi.com/api/",
    headers: {
        "X-RapidAPI-Key": "f033c07600mshc960531fd542aefp19d84fjsnabe97b4298a9",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
});

const baseGameService = createApi({
    reducerPath: "api",
    baseQuery: baseGameQuery,
    endpoints: () => ({}),
});

export default baseGameService;

export const postService = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    endpoints: (build) => ({
        getPosts: build.query({
            query: () => `posts`,
            providesTags: ["Post"],
        }),

        getPostById: build.query({
            query: (id) => `posts/${id}`,
        }),

        createPost: build.mutation({
            query: (post) => ({
                url: "posts",
                method: "POST",
                body: post,
            }),
            invalidatesTags: ["Post"],
        }),
        updatePost: build.mutation({}),
        deletePost: build.mutation({}),
    }),
    tagTypes: ["Post"],
});
