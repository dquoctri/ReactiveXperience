import React, { Fragment } from "react"
import { useSelector, useDispatch } from "react-redux"
import PageTitle from "components/common/page-title"
import PageProps from "pages/page.type"
import { RootState } from "store"
import { increment, decrement } from "store/actions"
import ContextComponent from "./context.component"

const ReduxPage = ({ title }: PageProps) => {
  const count = useSelector((state: RootState) => state.counter.count)

  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }
  return (
    <Fragment>
      <PageTitle title={title ? title : "Hello, Xoài"} />

      <div style={{ border: "1px solid black", width: "auto", padding: 10, margin: 10 }}>
        <h1>Redux Page content</h1>
        <h2>Counter: {count}</h2>
        <button onClick={handleIncrement} style={{ margin: 10 }}>
          Increment
        </button>
        <button onClick={handleDecrement} style={{ margin: 10 }}>
          Decrement
        </button>
        <div style={{ display: "flex" }}>
          <ContextComponent title="Content A" />
          <ContextComponent title="Content B" />
        </div>
      </div>
    </Fragment>
  )
}

export default ReduxPage
