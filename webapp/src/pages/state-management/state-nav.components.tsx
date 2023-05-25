import React from "react"
import { Link } from "react-router-dom"

const ReduxNav = () => (
  <>
    <div className="redux">
      <nav>
        <ul>
          <li>
            <Link to="/state-management/without">Without state management</Link>
          </li>
          <li>
            <Link to="/state-management/context">ContextAPI</Link>
          </li>
          <li>
            <Link to="/state-management/redux">Redux</Link>
          </li>
        </ul>
      </nav>
    </div>
  </>
)

export default ReduxNav