const form = document.getElementById('contact-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // prevent the form from submitting normally
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  const data = {
    name: name,
    email: email,
    number: number,
    subject: subject,
    message: message
  };
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'sendmail.php', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (this.status === 200) {
      // handle success
    } else {
      // handle error
    }
  };
  xhr.send(JSON.stringify(data));
}
