import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const ProtectRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth)

  if (isAuthenticated) {
    return <Navigate to="/" />
  } else {
    return <Outlet />
  }
}

export default ProtectRoute
