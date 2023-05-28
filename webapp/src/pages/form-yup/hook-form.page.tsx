import React, { useState } from "react"
import { useForm } from "react-hook-form"
import PageTitle from "components/common/page-title"
import PageProps from "pages/page.type"
import "./form.css"

interface FormData {
  firstName: string
  lastName: string
  gender: string
  age: number
  email: string
  password: string
}

const FormPage = ({ title }: PageProps) => {
  const [data, setData] = useState<FormData | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      age: 18,
    },
  })

  console.log(watch("email")) // watch input value by passing the name of it

  const _updateData = async (data: FormData) => {
    try {
      const response = await fetch("http://localhost:8152/mango/api/users", {
        method: "POST",
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

  const onSubmit = (data: FormData) => {
    //todo: somethings
    console.log(data)
    setData(data)
    _updateData(data)
    reset()
  }

  return (
    <div>
      <PageTitle title={title ? title : "Hello, Xoài"} />
      <div className="form" style={{ display: "flex" }}>
        <div style={{ border: "2px solid black", width: "40%", padding: 20, margin: "0 0 0 30px", display: "block" }}>
          <h1>React Hook Form Page</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                {...register("firstName", { required: true, maxLength: 20 })}
                name="firstName"
                placeholder="Your first name"
              />
              {errors.firstName && <span className="form-error">First Name is required</span>}
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                {...register("lastName", {
                  required: "Last Name is required",
                  pattern: { value: /^[A-Za-z]+$/i, message: "Last Name is must begin with a letter" },
                })}
                name="lastName"
                placeholder="Your last name"
              />
              {errors.lastName && <span className="form-error">{errors.lastName.message}</span>}
            </div>
            <div>
              <label htmlFor="age">Age</label>
              <input
                id="age"
                type="number"
                {...register("age", {
                  required: "Age is required",
                  min: { value: 18, message: "Minimum age is 18" },
                  max: 99,
                })}
                name="age"
              />
              {errors.age && <span className="form-error">{errors.age.message}</span>}
            </div>
            <div>
              <label htmlFor="gender">Gender</label>
              <select id="gender" {...register("gender", { required: true })} name="gender">
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
              {errors.gender && <span className="form-error">{errors.gender.message}</span>}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                {...register("email", { required: "Email Address is required" })}
                name="email"
                placeholder=""
              />
              {errors.email && <span className="form-error">{errors.email.message}</span>}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" },
                })}
                name="password"
                placeholder=""
              />
              {errors.password && <span className="form-error">{errors.password.message}</span>}
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        {data && (
          <div style={{ border: "2px solid black", width: "40%", padding: 20, margin: "0 0 0 30px", display: "block" }}>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  )
}

export default FormPage
