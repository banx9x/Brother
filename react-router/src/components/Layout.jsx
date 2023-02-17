import React from "react";
import { Outlet, Link, NavLink, useLoaderData } from "react-router-dom";
import MyNavbar from "./MyNavbar";

const Layout = () => {
    const data = useLoaderData();

    return (
        <div>
            <MyNavbar />

            <Outlet context={{ data }} />
        </div>
    );
};

export default Layout;

export const layoutLoader = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    return data;
};
