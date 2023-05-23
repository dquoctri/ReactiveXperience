import React from "react"
import { useRoutes } from "react-router-dom"
import { HomeRoutes, AdminRoutes } from "./config.d"
import { MainRoutes, ProductRoutes, NextRoutes } from "./demo.config.d"

const AppRoutes = () => {
  const _routing = useRoutes([AdminRoutes, HomeRoutes])
  const routing = useRoutes([MainRoutes, ProductRoutes, NextRoutes])
  return <>{routing}</>
}

export default AppRoutes
