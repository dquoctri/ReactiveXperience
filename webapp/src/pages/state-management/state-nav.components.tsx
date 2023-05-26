import React from "react"
import { NavLink } from "react-router-dom"
import "./state-management.css"

const ReduxNav = () => (
  <nav>
    <ul>
      <li><NavLink to="/state-management/without">Without state management</NavLink></li>
      <li><NavLink to="/state-management/context">ContextAPI</NavLink></li>
      <li><NavLink to="/state-management/redux">Redux</NavLink></li>
    </ul>
  </nav>
)

export default ReduxNav
