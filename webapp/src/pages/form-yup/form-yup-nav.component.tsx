import React from "react"
import { Link } from "react-router-dom"

const FormYupNav = () => (
  <>
    <div className="form-yup">
      <nav>
        <ul>
          <li>
            <Link to="/form-yup/hook-form">React Hook Form</Link>
          </li>
          <li>
            <Link to="/form-yup/form-yub">React Hook Form + Schema Validation</Link>
          </li>
        </ul>
      </nav>
    </div>
  </>
)

export default FormYupNav
