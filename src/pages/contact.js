import React from 'react'
import Layout from '../components/layout'
import Subheader from '../components/subheader'

const Contact = () => (
  <Layout>
    <Subheader text="Contact" />
    <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />
    <input type="hidden" name="bot-field" />
      <p>
        <label>Your Name: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </Layout>
);

export default Contact
