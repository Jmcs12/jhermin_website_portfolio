// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("All fields are required.");
  } else if (!email.includes("@")) {
    alert("Please enter a valid email.");
  } else {
    alert("Thank you for contacting me!");
    this.reset();
  }
});

// Theme switcher
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}
