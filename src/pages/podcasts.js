import React from 'react'

import Layout from '../components/layout'
import Subheader from '../components/subheader'

const Podcasts = () => (
  <Layout>
    <Subheader text="Podcasts" />
    <p>No, I don't have my own podcast. But I'm a big podcast junkie.</p>
    <p>Too many subscriptions, not enough time.</p>
    <p>Here are some that I've recently subscribed to.</p>
    <ul>
      <li><a href="//changelog.com/podcast">Changelog</a></li>
      <li><a href="//changelog.com/jsparty">JS Party</a></li>
      <li><a href="//www.npr.org/podcasts/510313/how-i-built-this">How I Built This</a></li>
      <li><a href="//www.npr.org/programs/wait-wait-dont-tell-me/">Wait Wait... Don't Tell Me!</a></li>
      <li><a href="//www.thisamericanlife.org/">This American Life</a></li>
    </ul>
  </Layout>
)

export default Podcasts
