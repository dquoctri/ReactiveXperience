import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'

// define interface to represent component props
interface Props {
  title: string
}

const PageTitle = ({ title }: Props) => {
  return (
    <Helmet defaultTitle={'Mango with love!'}>
      <title>Mango: {title}</title>
    </Helmet>
  )
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageTitle
