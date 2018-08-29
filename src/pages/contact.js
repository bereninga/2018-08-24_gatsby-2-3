import React from 'react'
import Layout from '../components/layout'
import Subheader from '../components/subheader'

const Contact = () => (
  <Layout>
    <Subheader text="Contact" />
    <p>Feel free to hit me up. Reaching me on Twitter is probably easier, but look, here's a form!</p>
    <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />
    <input type="hidden" name="bot-field" />
      <div class="form-input" style={{marginBottom: '1rem'}}>
        <label><span>Your Name:</span> <input type="text" name="name" /></label>
      </div>
      <div class="form-input" style={{marginBottom: '1rem'}}>
        <label><span>Your Email:</span> <input type="email" name="email" /></label>
      </div>
      <div class="form-input" style={{marginBottom: '1rem'}}>
        <label><span>Message:</span> <textarea name="message"></textarea></label>
      </div>
      <div class="form-input" style={{textAlign: 'center'}}>
        <button type="submit">Send</button>
      </div>
    </form>
  </Layout>
);

export default Contact
