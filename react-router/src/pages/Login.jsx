import React from "react";
import { Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";

const Login = () => {
    const { authState, dispatchAuthAction } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = () => {
        // Gọi API để xác thực email/password
        dispatchAuthAction({
            type: "setUser",
            payload: { username: "banx" },
        });

        navigate(location.state.from || "/");
    };

    return (
        <Container>
            <h1>Login</h1>

            <button
                onClick={() => dispatch({ type: "login", payload: credential })}
                className="btn btn-primary"
            >
                Login
            </button>
        </Container>
    );
};

export default Login;
