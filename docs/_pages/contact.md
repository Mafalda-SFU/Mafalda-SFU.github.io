---
classes: wide
permalink: /contact/
title: Contact
---

![email]({{ site.url }}{{ site.baseurl }}/assets/images/cocomaterial/digital_analog.svg){: .align-right width="40.6779661017%" }

For any Mafalda SFU related questions, inquiries, pricing, or sales information
please contact us by [email](mailto:info@mafalda.io), or fill the following
form:

<form id="my-form" action="https://formspree.io/f/xqkonqqq" method="POST"
  style="float: left; width: 100%"
>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" placeholder="email@example.com" />

  <label for="message">Message:</label>
  <textarea id="message" name="message"></textarea>

  <button class="btn btn--primary" id="my-form-button">Send</button>

  <p id="my-form-status"></p>
</form>

<script src="{{ '/assets/js/contact.js' | relative_url }}"></script>
