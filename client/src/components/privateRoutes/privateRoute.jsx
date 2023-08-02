import React from 'react'
import { Route, Outlet, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";
const PrivateRoute = (props) => {
  //const {isAuthenticated} = useSelector(state => state.auth);
  return localStorage.getItem("jwtToken")?<Outlet/>:<Navigate to="/login"/>;
}
export default PrivateRoute
