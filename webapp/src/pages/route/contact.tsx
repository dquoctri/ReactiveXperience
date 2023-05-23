import React, { Fragment, useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import PageTitle from "components/common/page-title"
import PageProps from "pages/page.type"

const Contact = ({ title }: PageProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const email = searchParams.get("email")
  const age = searchParams.get("age")

  const emailContent = useMemo(() => {
    if (!email) {
      console.log("email is not found")
      return
    }
    return <>email: {email}</>
  }, [email])

  const ageContent = useMemo(() => {
    if (!age) {
      console.log("age is not found")
      return
    }
    return <>age: {age}</>
  }, [age])

  return (
    <Fragment>
      <PageTitle title={title ? title : "Contact"} />
      <div>Contact: Mango</div>
      <div>{emailContent}</div>
      <div>{ageContent}</div>
    </Fragment>
  )
}

export default Contact
