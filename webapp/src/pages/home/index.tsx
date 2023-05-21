import React, { Fragment } from 'react'
import PageTitle from 'components/common/page-title'
import PageProps from '../page.type'

const Home = ({ title }: PageProps) => {
  return (
    <Fragment>
      <PageTitle title="Home" />
      <div>Home</div>
    </Fragment>
  )
}

export default Home
