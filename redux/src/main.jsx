import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/home/Home";
import "./index.css";
import { Provider } from "react-redux";
import store from "./features/root/store";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import GameDetail from "./routes/game-detail/GameDetail";
import PostList from "./routes/post/post-list/PostList";
import PostForm from "./routes/post/post-form/PostForm";

const router = createBrowserRouter([
    {
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/game/:id",
                element: <GameDetail />,
            },
            {
                path: "/posts",
                element: <PostList />,
            },
            {
                path: "/posts/create",
                element: <PostForm />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
