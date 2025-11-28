document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;

  alert(`Thanks ${name}! Your message has been prepared and will be sent to njmckissick@my.milligan.edu.\n\nMessage:\n${message}`);
  event.target.reset();
});
