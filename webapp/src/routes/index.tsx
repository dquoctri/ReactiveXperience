import React from "react"
import { useRoutes } from "react-router-dom"
import { HomeRoutes, HookRoutes, AdminRoutes } from "./config.d"
import { MainRoutes, ProductRoutes, NextRoutes } from "./demo.config.d"

const AppRoutes = () => {
  const routing = useRoutes([AdminRoutes, HookRoutes, HomeRoutes])
  const _routing = useRoutes([MainRoutes, ProductRoutes, NextRoutes])
  return <>{routing}</>
}

export default AppRoutes
