import React, { Fragment } from "react"
import PageTitle from "components/common/page-title"
import PageProps from "pages/page.type"

const About = ({ title }: PageProps) => {
  return (
    <Fragment>
      <PageTitle title={title ? title : "About"} />
      <div>About Mango</div>
    </Fragment>
  )
}

export default About
