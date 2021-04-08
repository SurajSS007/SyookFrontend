import React from 'react'
import List from "./List/List";
import Login from "./Login/Login";
import ProtectedRoute from "./ProtectedRoute";
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";
export default function Routing() {
    return (
        <div>
        <Router>
        <div >
            <Route path="/" exact component={Login} />
            <ProtectedRoute path="/list" isAuth={localStorage.getItem('isLogin')} exact component={List} />
        </div>
    </Router>
        </div>
    )
}