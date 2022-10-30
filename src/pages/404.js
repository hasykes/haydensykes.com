import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <h1>404 NOT FOUND</h1>
    <p>Looks like you might be lost... why don't you <Link to="/">head home</Link>?</p>
  </Layout>
)

export default NotFoundPage
