import React, { useState, useEffect } from "react"

const FetchExample = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8152/mango/api/users")
        if (!response.ok) {
          throw new Error("Request failed")
        }
        const json = await response.json()
        setData(json)
        setLoading(false)
      } catch (error) {
        let message = "Unknown Error"
        if (error instanceof Error) message = error.message
        setError(message)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h1>API Data</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}

export default FetchExample
