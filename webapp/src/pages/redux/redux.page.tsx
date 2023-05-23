import React, { Fragment } from "react"
import { useSelector, useDispatch } from "react-redux"
import PageTitle from "components/common/page-title"
import PageProps from "pages/page.type"
import { RootState } from "store"
import { increment, decrement } from "store/counter/counter.action"

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
      <div>Redux Page content</div>
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </Fragment>
  )
}

export default ReduxPage
