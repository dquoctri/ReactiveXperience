import React, { useEffect, useState } from "react"
import PageTitle from "components/common/page-title"
import PageProps from "pages/page.type"
import { useDebounce } from "hooks/debounce.hooks"

const Debouse = ({ title }: PageProps) => {
  const [inputValue, setInputValue] = useState("")
  const debouncedInputValue = useDebounce<string>(inputValue, 500)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  useEffect(() => {
    // Perform actions with the debounced input value
    // This effect will only run after the input value has not changed for 500ms
    console.log("Debounced input value:", debouncedInputValue)
  }, [debouncedInputValue])

  return (
    <>
      <PageTitle title={title ? title : "Debouse"} />
      <div>Debouse Mango</div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>Input value: {inputValue}</p>
      <p>Debounced value: {debouncedInputValue}</p>
    </>
  )
}

export default Debouse
