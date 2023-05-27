import React from "react"
import { useRoutes } from "react-router-dom"
import routes from "./config.d"
// import demoRoutes from "./demo.config.d"

const AppRoutes = () => {
  const routing = useRoutes(routes)
  // const routing = useRoutes(demoRoutes)
  return <>{routing}</>
}

export default AppRoutes
