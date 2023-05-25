import React, { Fragment } from "react"
import PageTitle from "components/common/page-title"
import PageProps from "pages/page.type"
import ContextComponent from "./context.component"

const ContextPage = ({ title }: PageProps) => {
  return (
    <Fragment>
      <PageTitle title={title ? title : "Hello, Xoài"} />
      <div style={{ border: "1px solid black", width: "auto", padding: 10, margin: 10 }}>
        <h1>Context Page content</h1>
        <div style={{ display: "flex" }}>
          <ContextComponent title="Content A" />
          <ContextComponent title="Content B" />
        </div>
      </div>
    </Fragment>
  )
}

export default ContextPage
