import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const About = () => (
  <Layout>
    <h1>About Me</h1>
    <p>I'm a web developer who likes to try all the things.</p>
    <ul>
        <li><Link to="https://github.com/bereninga">Github</Link></li>
        <li><Link to="https://twitter.com/bereninga">Twitter</Link></li>
    </ul>
    <ul>
        <li>
            <Link to="/">Go back to the homepage</Link>
        </li>
        <li>
            <Link to="/contact/">Contact Me</Link>
        </li>
    </ul>
    <div>
    </div>
  </Layout>
)

export default About
