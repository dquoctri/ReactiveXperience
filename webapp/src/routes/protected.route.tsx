import React from "react"
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { authenticationSelector } from "../store/authentication/authentication.selector"
import ProtectedProps from "./protected.type"

// define interface to represent component props
export interface Props extends ProtectedProps {
  children: JSX.Element
}

const ProtectedRoute = ({ children, roles }: Props) => {
  const auth = useSelector(authenticationSelector)
  const location = useLocation()

  if (!roles) {
    return <>{children}</>
  }

  if (!auth.authenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  if (!roles.some(role => auth.roles && auth.roles.includes(role))) {
    return <Navigate to="/403" />
  }
  return <>{children}</>
}

export default ProtectedRoute
