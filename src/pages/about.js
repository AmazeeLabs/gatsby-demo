import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => (
  <Layout>
    <h1>About</h1>
    <p>Let’s grab this data from a Markdown file.</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default AboutPage
