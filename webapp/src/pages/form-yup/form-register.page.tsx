import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import PageTitle from "components/common/page-title"
import PageProps from "pages/page.type"

interface FormData {
  firstName: string
  lastName: string
  email: string
  password: string
}

const schema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
})

const FormPage = ({ title }: PageProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const updateData = async (data: FormData) => {
    try {
      const response = await fetch("http://localhost:8152/mango/api/users", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        throw new Error("Request failed")
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
    console.log(data)
    updateData(data)
  }

  return (
    <div>
      <PageTitle title={title ? title : "Hello, Xoài"} />
      <h1>Form Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input {...register("firstName")} type="text" id="firstName" name="firstName" />
          {errors.firstName && <span>{errors.firstName.message}</span>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input {...register("lastName")} type="text" id="lastName" name="lastName" />
          {errors.lastName && <span>{errors.lastName.message}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input {...register("email")} type="text" id="email" name="email" />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input {...register("password")} type="password" id="password" name="password" />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormPage
