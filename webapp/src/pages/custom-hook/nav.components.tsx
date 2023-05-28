import React from "react"
import { NavLink } from "react-router-dom"
import "./custom-hook.css"

const CustomHookNav = () => (
  <div className="custom-hook">
    <nav>
      <ul>
        <li>
          <NavLink to="/custom-hook/debouse">Debouse</NavLink>
        </li>
        <li>
          <NavLink to="/custom-hook/local-storage">Local storage</NavLink>
        </li>
        <li>
          <NavLink to="/custom-hook/scroll-position">Scroll Position</NavLink>
        </li>
        <li>
          <NavLink to="/custom-hook/pagination">Pagination</NavLink>
        </li>
        <li>
          <NavLink to="/custom-hook/authentication">Authentication</NavLink>
        </li>
      </ul>
    </nav>
  </div>
)

export default CustomHookNav
