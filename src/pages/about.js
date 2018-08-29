import React from 'react'

import Layout from '../components/layout'
import Subheader from '../components/subheader'

const About = () => (
  <Layout>
    <Subheader text="About" />
    <p>I'm a web software engineer who likes to try all the things on the web.</p>
    <p>Currently employed at <a href="//www.mlb.com">MLB</a>.</p>
    <ul>
        <li><a href="//twitter.com/bereninga">Twitter</a></li>
        <li><a href="//github.com/bereninga">Github</a></li>
        <li><a href="//www.linkedin.com/in/vlimshowchen/">LinkedIn</a></li>
        <li><a href="//dev.to/bereninga">dev.to</a></li>
    </ul>
  </Layout>
)

export default About
