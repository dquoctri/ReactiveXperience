import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import PageTitle from "components/common/page-title"
import PageProps from "pages/page.type"

const Next = ({ title }: PageProps) => {
  return (
    <Fragment>
      <PageTitle title={title ? title : "Next"} />
      <div>Next</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}

export default Next