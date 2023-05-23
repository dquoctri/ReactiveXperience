import React, { Fragment } from "react"
import PageTitle from "components/common/page-title"
import PageProps from "pages/page.type"

interface ProfuctProps extends PageProps {
  productId?: number
}

const Product = ({ title, productId }: ProfuctProps) => {
  return (
    <Fragment>
      <PageTitle title={title ? title : "Product"} />
      <div>Product</div>
    </Fragment>
  )
}

export default Product
