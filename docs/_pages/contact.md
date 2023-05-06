---
permalink: /contact/
title: Contact
---

For any Mafalda SFU related questions, inquiries, pricing, or sales information
please contact us by [email](mailto:info@mafalda.io), or fill the following
form:

<form id="my-form" action="https://formspree.io/f/xqkonqqq" method="POST">
  <label>Email:</label>
  <input type="email" name="email" />

  <label>Message:</label>
  <textarea name="message" />

  <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response">

  <button id="my-form-button">Submit</button>

  <p id="my-form-status"></p>
</form>

<script
  src="https://www.google.com/recaptcha/api.js?render=6LcHk-IlAAAAAEc91CzS-AipL6ZXT04PaObfbkxX"
></script>
<script src="{{ '/assets/js/contact.js' | relative_url }}"></script>
