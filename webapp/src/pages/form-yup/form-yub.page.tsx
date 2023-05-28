import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
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

const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string()
    .required()
    .matches(/^[A-Za-z]+$/i, "Begin with a letter"),
  gender: Yup.string().required().oneOf(["female", "male"], "testing"),
  age: Yup.number()
    .required("Age is required")
    .when(["gender"], {
      is: "male",
      then: () => Yup.number().min(20).max(99).required(),
      otherwise: () => Yup.number().min(18).max(99).required(),
    }),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required")
    .test("Is existed?", "Email is already in use", (email: string) => {
      return email !== "vy@mango.dqtri.com"
    }),
  password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
})

const FormYubPage = ({ title }: PageProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      gender: "other",
      age: 18,
    },
    resolver: yupResolver(schema),
  })

  console.log(watch("email"))

  const onSubmit = (data: FormData) => {
    //todo: somethings
    console.log(data)
    reset()
  }

  return (
    <div className="form">
      <PageTitle title={title ? title : "Hello, Xoài"} />
      <div style={{ border: "2px solid black", width: "40%", padding: 20, margin: "0 0 0 30px", display: "block" }}>
        <h1>Form Page</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              {...register("firstName")}
              name="firstName"
              placeholder="Your first name"
            />
            {errors.firstName && <span className="form-error">First Name is required</span>}
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" type="text" {...register("lastName")} name="lastName" placeholder="" />
            {errors.lastName && <span className="form-error">{errors.lastName.message}</span>}
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input id="age" type="number" {...register("age")} name="age" placeholder="" />
            {errors.age && <span className="form-error">{errors.age.message}</span>}
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <select id="gender" {...register("gender")} name="gender">
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
            {errors.gender && <span className="form-error">{errors.gender.message}</span>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" {...register("email")} name="email" placeholder="" />
            {errors.email && <span className="form-error">{errors.email.message}</span>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" {...register("password")} name="password" placeholder="" />
            {errors.password && <span className="form-error">{errors.password.message}</span>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default FormYubPage
