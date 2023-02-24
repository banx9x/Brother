import React, { useContext, useReducer } from "react";

export const AuthContext = React.createContext();

export const authReducer = (authState, action) => {
    switch (action.type) {
        case "setUser": {
            return {
                isAuthenticate: !!action.payload,
                user: action.payload,
            };
        }

        default: {
            return authState;
        }
    }
};

// Custom hook
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = (props) => {
    const [authState, dispatch] = useReducer(authReducer, {
        isAuthenticate: false,
        user: null,
        token: null,
    });

    return (
        <AuthContext.Provider
            value={{ authState, dispatchAuthAction: dispatch }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};
