import React from "react"
import "./loader.css"

interface LoaderProps {
  text?: string
}

const Loader = ({ text = "Loading..." }: LoaderProps) => {
  return (
    <>
      <div>
        <span>{text}</span>
        <div className="loader" /> {/* Add your loader animation here */}
      </div>
    </>
  )
}

export default Loader
