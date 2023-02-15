import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import MyNavbar from "./MyNavbar";

const Layout = () => {
    return (
        <div>
            <MyNavbar />

            <CartProvider>
                <Outlet />
            </CartProvider>
        </div>
    );
};

export default Layout;
