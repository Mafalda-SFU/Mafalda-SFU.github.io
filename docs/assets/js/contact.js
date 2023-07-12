const headers = {Accept: 'application/json'}


function getMessage({message})
{
  return message
}

function handleSubmit(event)
{
  function whenError(error)
  {
    console.error(error)

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

    const data = await response.json()

    throw data.errors?.map(getMessage).join(", ")
      ?? "Oops! There was a problem submitting your form: " + data
  }

  function whenFinally()
  {
    button.disabled = false;
    button.innerHTML = "Send";
    email.disabled = false;
    message.disabled = false;
  }


  event.preventDefault();

  const { target, target: {action, method} } = event;
  const body = new FormData(target);

  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const button = document.getElementById("my-form-button");
  const status = document.getElementById("my-form-status");

  button.disabled = true;
  button.innerHTML = "Sending...";
  email.disabled = true;
  message.disabled = true;
  status.innerHTML = "";

  void fetch(action, {body, headers, method})
  .then(whenFetch)
  .catch(whenError)
  .finally(whenFinally);
}


document.getElementById("my-form").addEventListener("submit", handleSubmit)
