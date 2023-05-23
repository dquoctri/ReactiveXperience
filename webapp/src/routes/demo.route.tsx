import React from "react"
import { Routes, Route } from "react-router-dom"
import { HomeRoutes, AdminRoutes } from "./config.d"

const DemoRoutes = () => {
  return (
    <>
      <div className="demo">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contract">Contract</a>
            </li>
            <li>
              <a href="/product">Product</a>
            </li>
            <li>
              <a href="/product/1">Product1</a>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="" />
      </Routes>
    </>
  )
}

export default DemoRoutes
