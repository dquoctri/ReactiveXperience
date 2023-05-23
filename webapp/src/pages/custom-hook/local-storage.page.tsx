import React, { Fragment } from "react"
import PageTitle from "components/common/page-title"
import PageProps from "pages/page.type"
import { useLocalStorage } from "hooks"

const LocalStoragePage = ({ title }: PageProps) => {
  const [name, setName] = useLocalStorage("name", "")

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  return (
    <Fragment>
      <PageTitle title={title ? title : "Local Storage Page"} />

      <div>Local Storage content</div>
      <div>
        <input type="text" value={name} onChange={handleNameChange} />
        <p>Hello, {name}!</p>
      </div>
    </Fragment>
  )
}

export default LocalStoragePage
