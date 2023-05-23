import React from "react"
import { useRoutes } from "react-router-dom"
import { HomeRoutes, LoginRoutes, ReduxRoutes, HookRoutes, AdminRoutes } from "./config.d"
import { MainRoutes, ProductRoutes, NextRoutes } from "./demo.config.d"

const AppRoutes = () => {
  const routing = useRoutes([AdminRoutes, HookRoutes, ReduxRoutes, LoginRoutes, HomeRoutes])
  const _routing = useRoutes([MainRoutes, ProductRoutes, NextRoutes])
  return <>{routing}</>
}

export default AppRoutes
