import React from "react"
import { useRoutes } from "react-router-dom"
import { HomeRoutes, AdminRoutes } from "./config.d"

const AppRoutes = () => {
  const routing = useRoutes([AdminRoutes, HomeRoutes])
  return <>{routing}</>
}

export default AppRoutes
