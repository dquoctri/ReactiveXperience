import React from "react"
import { Link } from "react-router-dom"

const MainNav = () => (
  <>
    <div className="main-nav">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/custom-hook">Custom Hooks</Link>
          </li>
          <li>
            <Link to="/redux">Redux</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>
    </div>
  </>
)

export default MainNav
