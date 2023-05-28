import React, { useState, useEffect } from "react"
import axios from "axios"

const FetchExample = () => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const fetchData = () => {
    axios
      .get("http://localhost:8152/mango/api/users")
      .then(response => {
        setData(response)
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
    await axios
      .get("http://localhost:8152/mango/api/users")
      .then(response => {
        setData(response)
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
      const response = await axios.put("http://localhost:8152/mango/api/users", data)
      if (response.status !== 200) {
        throw new Error("Update failed")
      }
      console.log(response.data)
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
