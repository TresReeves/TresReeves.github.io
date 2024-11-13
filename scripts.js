document.getElementById("orderForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Basic validation and feedback
  if (name && email && message) {
    document.getElementById("responseMessage").innerText = `Thank you, ${name}. Your message has been sent!`;
    document.getElementById("orderForm").reset();
  } else {
    document.getElementById("responseMessage").innerText = "Please fill out all fields.";
  }
});