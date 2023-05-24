import React from "react"
import { Link } from "react-router-dom"

const CustomHookNav = () => (
  <>
    <div className="demo">
      <nav>
        <ul>
          <li>
            <Link to="/custom-hook/debouse">Debouse</Link>
          </li>
          <li>
            <Link to="/custom-hook/local-storage">Local storage</Link>
          </li>
          <li>
            <Link to="/custom-hook/scroll-position">Scroll Position</Link>
          </li>
          <li>
            <Link to="/custom-hook/pagination">Pagination</Link>
          </li>
          <li>
            <Link to="/custom-hook/authentication">Authentication</Link>
          </li>
        </ul>
      </nav>
    </div>
  </>
)

export default CustomHookNav
