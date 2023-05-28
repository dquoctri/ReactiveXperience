import React, { useState, useEffect } from "react"

const FetchExample = () => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const fetchData = () => {
    fetch("http://localhost:8152/mango/api/users")
      .then(response => response.json())
      .then(json => {
        setData(json)
      })
      .catch(error => {
        setError(error?.message)
      })
      .finally(() => {
        setLoading(false)
        console.log("finally")
      })
  }

  const _fetchDataAsync = async () => {
    await fetch("http://localhost:8152/mango/api/users")
      .then(response => response.json())
      .then(json => {
        setData(json)
      })
      .catch(error => {
        setError(error?.message)
      })
      .finally(() => {
        setLoading(false)
        console.log("finally")
      })
  }

  const _updateData = async (data: FormData) => {
    try {
      const response = await fetch("http://localhost:8152/mango/api/users", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        throw new Error("Update failed")
      }
      const json = await response.json()
      console.log(json)
    } catch (error) {
      let message = "Unknown Error"
      if (error instanceof Error) message = error.message
      console.log(message)
    }
  }

  useEffect(() => {
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
