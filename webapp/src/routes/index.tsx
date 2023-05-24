import React from "react"
import { useRoutes } from "react-router-dom"
import { homeRoutes, loginRoutes, reduxRoutes, hookRoutes, AdminRoutes } from "./config.d"
import { mainRoutes, productRoutes } from "./demo.config.d"

const AppRoutes = () => {
  const routing = useRoutes([AdminRoutes, hookRoutes, reduxRoutes, loginRoutes, homeRoutes])
  const _routing = useRoutes([mainRoutes, productRoutes])
  return <>{routing}</>
}

export default AppRoutes
