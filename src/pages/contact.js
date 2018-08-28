import React from 'react'

const Contact = () => (
<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/pages/success/">
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
)

export default Contact
