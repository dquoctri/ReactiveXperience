import React, { Fragment, useState } from "react"
import { Link } from "react-router-dom"
import PageTitle from "components/common/page-title"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Perform login logic here
    console.log("Email:", email)
    console.log("Password:", password)
    // Reset form fields
    setEmail("")
    setPassword("")
  }

  return (
    <Fragment>
      <PageTitle title="Login" />
      <div>
        <Link to="/">- Go Back Home</Link>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </Fragment>
  )
}

export default LoginPage
