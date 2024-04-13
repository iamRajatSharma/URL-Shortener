import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateComponent = () => {
    const ls = localStorage.getItem("users")
    var loggedIn = JSON.parse(ls)
    return loggedIn != null ? <Outlet /> : <Navigate to="/signup" />

}
