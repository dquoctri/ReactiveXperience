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
            <Link to="/form-yup">Forms with react-hook-form & yup</Link>
          </li>
          <li>
            <Link to="/api-call">API calls in ReactJS</Link>
          </li>
          <li>
            <Link to="/custom-hook">Custom Hooks example</Link>
          </li>
          <li>
            <Link to="/state-management">State Management</Link>
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
