import React from 'react'

import Layout from '../components/layout'
import Subheader from '../components/subheader'

const Tools = () => (
  <Layout>
    <Subheader text="Tools" />
    <p>Some tools I'm digging right now.</p>
    <ul>
      <li><a href="//github.com/Microsoft/vscode">VS Code</a></li>
      <li><a href="//github.com/zeit/hyper">Hyper</a></li>
    </ul>
  </Layout>
)

export default Tools
