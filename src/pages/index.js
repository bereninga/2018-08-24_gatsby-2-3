import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Check this out</h1>
    <p>This is my site, built with GatsbyJS.</p>
    <p>How sweet is this?</p>
    <Link to="/about/">About</Link>
  </Layout>
)

export default IndexPage
