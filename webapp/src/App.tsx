import React from "react"
import { BrowserRouter } from "react-router-dom"
import "./App.css"
import Routes from "routes"
import _Routes from "routes/demo.route"

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
