import React, { Fragment } from "react"
import PageTitle from "components/common/page-title"
import PageProps from "pages/page.type"

const MainHookPage = ({ title }: PageProps) => {
  return (
    <Fragment>
      <PageTitle title={title ? title : "Main Hook Page"} />
      <div>MainHookPage content</div>
    </Fragment>
  )
}

export default MainHookPage
