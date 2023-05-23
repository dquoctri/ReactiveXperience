import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "pages/home"
import Admin from "pages/admin/dashboard"
import NotFound from "./404"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
