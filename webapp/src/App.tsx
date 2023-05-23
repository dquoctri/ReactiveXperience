import React from "react"
import { BrowserRouter } from "react-router-dom"
import "./App.css"
import Routes from "routes"
import DemoRoutes from "routes/demo.route"

function App() {
  return (
    <BrowserRouter>
      <DemoRoutes />
    </BrowserRouter>
  )
}

export default App
