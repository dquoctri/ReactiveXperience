import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import PageTitle from "components/common/page-title"

const ServerError = () => {
  return (
    <Fragment>
      <PageTitle title="ServerError" />
      <p>Oops! 500 Internal Server Error server error</p>
      <p>
        The HyperText Transfer Protocol (HTTP) 500 Internal Server Error server error response code indicates that the
        server encountered an unexpected condition that prevented it from fulfilling the request.{" "}
      </p>
      <p>
        Back to <Link to="/">/Home</Link> page
      </p>
    </Fragment>
  )
}

export default ServerError
