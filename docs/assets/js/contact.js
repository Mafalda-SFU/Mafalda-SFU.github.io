const headers = {Accept: 'application/json'}


function getMessage({message})
{
  return message
}

function handleSubmit(event)
{
  function onReCaptchaReady()
  {
    void grecaptcha.execute(
      '6LcHk-IlAAAAAEc91CzS-AipL6ZXT04PaObfbkxX', {action: 'submit'}
    )
    .then(whenReCaptchaTokenReady);
  }

  function whenError(error)
  {
    status.innerHTML = error
  }

  async function whenFetch(response)
  {
    if (response.ok)
    {
      status.innerHTML = "Thanks for your submission!";
      target.reset()
      return
    }

    await response.json().then(whenJson)
  }

  async function whenReCaptchaTokenReady(token)
  {
    document.getElementById("g-recaptcha-response").value = token;

    const body = new FormData(target);

    await fetch(action, {body, headers, method})
    .then(whenFetch)
    .catch(whenError);
  }


  const status = document.getElementById("my-form-status");
  const { target, target: {action, method} } = event;

  event.preventDefault();

  grecaptcha.ready(onReCaptchaReady);
}

function whenJson(data)
{
  throw data.errors?.map(getMessage).join(", ")
    ?? "Oops! There was a problem submitting your form: " + data
}


document.getElementById("my-form").addEventListener("submit", handleSubmit)
