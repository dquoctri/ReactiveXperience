import React from "react"
import { Link } from "react-router-dom"

const ApiCallNav = () => (
  <>
    <div className="api-call-nav">
      <nav>
        <ul>
          <li>
            <Link to="/api-call/fetch-api">Fetch API</Link>
          </li>
          <li>
            <Link to="/api-call/axios-api">Axios</Link>
          </li>
        </ul>
      </nav>
    </div>
  </>
)

export default ApiCallNav
