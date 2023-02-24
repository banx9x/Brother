import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/auth";

// Phân theo role => Admin, Staff, ...
const PrivateRoute = ({ redirectRoute }) => {
    const { authState } = useAuth();

    if (!authState.isAuthenticate) {
        return <Navigate to={redirectRoute} state={{ from: "/dashboard" }} />;
    }

    return <Outlet />;
};

export default PrivateRoute;
