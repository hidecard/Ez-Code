document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const messageDiv = document.getElementById("message");
  const redirectUrl = "index.html"; // Dynamic redirect URL

  // Clear previous messages
  messageDiv.classList.add("d-none");

  fetch("https://script.google.com/macros/s/AKfycbyu9Qhe352oHWEpMSTrj3LQVSpgdioRs4OhmNa6EDrMbf7JEwBzXSeNC4bhIYH9oadx/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, redirectUrl })
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Redirect to homepage with username as query parameter
        window.location.href = `${data.redirectUrl}?username=${encodeURIComponent(data.username)}`;
      } else {
        // Show error message
        messageDiv.classList.remove("d-none");
        messageDiv.textContent = data.message;
      }
    })
    .catch(error => {
      // Show error message
      messageDiv.classList.remove("d-none");
      messageDiv.textContent = "Error: " + error.message;
    });
});