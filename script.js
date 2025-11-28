// Simple contact form handler
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;

  // For now, just simulate sending email
  alert(`Message sent!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n\nThis will be sent to njmckissick@my.milligan.edu`);
  
  event.target.reset();
});
