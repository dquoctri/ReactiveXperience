import React, { Fragment, useState } from "react"
import PageTitle from "components/common/page-title"
import PageProps from "pages/page.type"
import { useAuthentication } from "hooks"

const AuthenticationPage = ({ title }: PageProps) => {
  const { user, login, logout } = useAuthentication()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    login(email, password)
    setEmail("")
    setPassword("")
  }

  return (
    <Fragment>
      <PageTitle title={title ? title : "Authentication"} />

      <div>Authentication content</div>
      <div>
        {user ? (
          <div>
            <p>Welcome, {user.email}!</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={handleUsernameChange} />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" value={password} onChange={handlePasswordChange} />
            </div>
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </Fragment>
  )
}

export default AuthenticationPage
