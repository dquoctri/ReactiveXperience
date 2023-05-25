import React from "react"
import { useRoutes } from "react-router-dom"
import routes from "./config.d"
import { mainRoutes, productRoutes } from "./demo.config.d"

const AppRoutes = () => {
  const routing = useRoutes(routes)
  const _routing = useRoutes([mainRoutes, productRoutes])
  return <>{routing}</>
}

export default AppRoutes
