import React from "react"
import { Link } from "react-router-dom"

const CustomHookNav = () => (
  <>
    <div className="demo">
      <nav>
        <ul>
          <li>
            <Link to="/custom-hook">Custom Hook</Link>
          </li>
          <li>
            <Link to="/custom-hook/debouse">Debouse</Link>
          </li>
        </ul>
      </nav>
    </div>
  </>
)

export default CustomHookNav
