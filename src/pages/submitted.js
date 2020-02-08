import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Submitted = () => (
  <Layout>
    <h1>Thank you for reaching out!</h1>
    <p>I will get back to you within 48 hours.</p>
    <Link to="/">Return to Homepage</Link>
  </Layout>
)

export default Submitted
