import React, { Fragment } from "react"
import PageTitle from "components/common/page-title"

const Forbidden = () => {
  return (
    <Fragment>
      <PageTitle title="Forbidden" />
      <p>403 Access Denied: Please go back, don&apos;t lose your way!</p>
    </Fragment>
  )
}

export default Forbidden
