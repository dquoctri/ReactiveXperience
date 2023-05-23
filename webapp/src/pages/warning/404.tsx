import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import PageTitle from "components/common/page-title"

const NotFound = () => {
  return (
    <Fragment>
      <PageTitle title="NotFound-Deadline" />
      <p>Oops! page not found </p>
      <p>Sorry, we can&apos;t find that page! It might be an old link or maybe it moved</p>
      <p>Back to <Link to="/">/Home</Link> page</p>
    </Fragment>
  )
}

export default NotFound
