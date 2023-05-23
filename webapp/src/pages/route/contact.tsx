import React, { Fragment, useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import PageTitle from "components/common/page-title"
import PageProps from "pages/page.type"

const Contact = ({ title }: PageProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const email = searchParams.get("email")
  const age = searchParams.get("age")

  const emailContent = useMemo(() => {
    return email && <>email: {email}</>
  }, [email])

  const ageContent = useMemo(() => {
    return age && <>age: {age}</>
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
