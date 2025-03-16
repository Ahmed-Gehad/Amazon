import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const PrivateRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) return <p>Loading...</p>;

    return user ? children : <Navigate to="/LoginPage" state={{ from: location }} replace />;
};

export default PrivateRoute;
