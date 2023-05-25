import React from "react"
import { useRoutes } from "react-router-dom"
import { homeRoutes, loginRoutes, reduxRoutes, hookRoutes, formyupRoutes, apiCallRoutes } from "./config.d"
import { mainRoutes, productRoutes } from "./demo.config.d"

const AppRoutes = () => {
  const routing = useRoutes([formyupRoutes, hookRoutes, reduxRoutes, loginRoutes, homeRoutes, apiCallRoutes])
  const _routing = useRoutes([mainRoutes, productRoutes])
  return <>{routing}</>
}

export default AppRoutes
