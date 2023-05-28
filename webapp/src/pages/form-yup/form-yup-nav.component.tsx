import React from "react"
import { NavLink } from "react-router-dom"

const FormYupNav = () => (
  <>
    <div className="form-yup">
      <nav>
        <ul>
          <li>
            <NavLink to="/form-yup/hook-form">React Hook Form</NavLink>
          </li>
          <li>
            <NavLink to="/form-yup/form-yub">React Hook Form + Schema Validation</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </>
)

export default FormYupNav
