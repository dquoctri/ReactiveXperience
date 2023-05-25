import React from "react"
import { Link } from "react-router-dom"

const FormYupNav = () => (
  <>
    <div className="form-yup">
      <nav>
        <ul>
          <li>
            <Link to="/form-yup/form-register">Form Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  </>
)

export default FormYupNav
