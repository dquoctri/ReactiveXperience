import React, { Fragment } from "react"
import PageTitle from "components/common/page-title"
import PageProps from "pages/page.type"

const Home = ({ title }: PageProps) => {
  return (
    <Fragment>
      <PageTitle title={title ? title : "Hello, Xoài"} />
      <div>Home content</div>
    </Fragment>
  )
}

export default Home
