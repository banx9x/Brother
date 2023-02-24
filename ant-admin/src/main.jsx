import React from "react";
import ReactDOM from "react-dom/client";
import { Button, ConfigProvider, Result } from "antd";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import "antd/dist/reset.css";
import "./index.css";
import Layout from "./routes/layout";
import Dashboard from "./routes/dashboard";
import Users from "./routes/users";
import Posts from "./routes/posts";
import Login from "./routes/login";
import { Helmet, HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "users",
                element: <Users />,
            },
            {
                path: "posts",
                element: <Posts />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        // Xử lý trường hợp 404
        path: "*",
        element: (
            <React.Fragment>
                <Helmet>
                    <title>404 | Page Not Found</title>
                </Helmet>

                <Result
                    status={404}
                    title="404 | Page Not Found"
                    subTitle="Trang bạn truy cập không tồn tại"
                    extra={
                        <Link to="/" replace>
                            <Button type="primary">Quay về trang chủ</Button>
                        </Link>
                    }
                />
            </React.Fragment>
        ),
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ConfigProvider theme={{}}>
            <HelmetProvider>
                <RouterProvider router={router} />
            </HelmetProvider>
        </ConfigProvider>
    </React.StrictMode>
);
