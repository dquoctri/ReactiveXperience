import React from "react"
import { NavLink } from "react-router-dom"
import "./component.css"

const MainNav = () => (
  <div className="main-nav">
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/form-yup">Forms Validation</NavLink>
        </li>
        <li>
          <NavLink to="/api-call">API Calls</NavLink>
        </li>
        <li>
          <NavLink to="/custom-hook">Custom Hooks</NavLink>
        </li>
        <li>
          <NavLink to="/state-management">State Management</NavLink>
        </li>
      </ul>
    </nav>
  </div>
)

export default MainNav
