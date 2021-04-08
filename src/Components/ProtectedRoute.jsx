import React from 'react'
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ isAuth, render: Component, ...rest }) {
    return <Route {...rest} render={(prop) => {
        if (localStorage.getItem('isLogin')) {
            return <Component {...prop} />;
        } else {
            return <Redirect to={{ pathname: "/", state: { from: prop.location} }} />
        }
    }} />;
}

export default ProtectedRoute
