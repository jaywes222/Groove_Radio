import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';

const ProtectedRoute = () => {
    const location = useLocation();

    const { user } = useContext(UserContext);

    // If there is no user, redirect to login page with the current location state
    if (!user) {
        return <Navigate to="/login" state={{ from: location.pathname }} />;
    }

    return <Outlet />; // Render the protected components
};

export default ProtectedRoute;
