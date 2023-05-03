---
permalink: /contact/
title: Contact
---

For any Mafalda SFU question, inquiry, or sales information please contact us by
[email](mailto:info@mafalda.io), or fill the following form:

<form id="my-form" action="https://formspree.io/f/xqkonqqq" method="POST">
  <label>Email:</label>
  <input type="email" name="email" />
  <label>Message:</label>
  <input type="text" name="message" />
  <button id="my-form-button">Submit</button>
  <p id="my-form-status"></p>
</form>

<script>
  const form = document.getElementById("my-form");

  function handleSubmit(event) {
    event.preventDefault();

    const status = document.getElementById("my-form-status");
    const data = new FormData(event.target);

    void fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
        return
      }

      return response.json().then(data => {
        throw Object.hasOwn(data, 'errors')
          ? data["errors"].map(error => error["message"]).join(", ")
          : "Oops! There was a problem submitting your form: " + data
      })
    }).catch(error => {
      status.innerHTML = error
    });
  }

  form.addEventListener("submit", handleSubmit)
</script>
