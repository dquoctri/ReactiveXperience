import React, { Fragment } from "react"
import PageTitle from "components/common/page-title"
import PageProps from "pages/page.type"

interface ContractProps extends PageProps {
  email?: string
}

const Contact = ({ title, email }: ContractProps) => {
  return (
    <Fragment>
      <PageTitle title={title ? title : "Contact"} />
      <div>Contact: email</div>
    </Fragment>
  )
}

export default Contact
