import React, { Fragment, useMemo } from "react"
import { useParams } from "react-router-dom"
import PageTitle from "components/common/page-title"
import PageProps from "pages/page.type"

const Product = ({ title }: PageProps) => {
  const { productId } = useParams()

  const productDetails = useMemo(() => {
    if (!productId) {
      console.log("Product id not found")
      return
    }
    return <>product id: {productId}</>
  }, [productId])

  return (
    <Fragment>
      <PageTitle title={title ? title : "Product"} />
      <div>Products</div>
      <div>
        {!productId && (
          <>
            <p>1: House</p>
            <p>2: Car</p>
          </>
        )}
      </div>
      <div>{productDetails}</div>
    </Fragment>
  )
}

export default Product
