import React from 'react'

import Layout from '../components/layout'
import Subheader from '../components/subheader'

const About = () => (
  <Layout>
    <Subheader text="About" />
    <p>I'm a web developer who likes to try all the things.</p>
    <p>Currently employed at <a href="//www.mlb.com">MLB</a>. All content and opinions on this site are my own.</p>
    <ul>
        <li><a href="//github.com/bereninga">Github</a></li>
        <li><a href="//twitter.com/bereninga">Twitter</a></li>
    </ul>
    <div>
    </div>
  </Layout>
)

export default About
