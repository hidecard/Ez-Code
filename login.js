document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const messageDiv = document.getElementById("message");
  const redirectUrl = "index.html";

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
        window.location.href = `${data.redirectUrl}?username=${encodeURIComponent(data.username)}`;
      } else {
        messageDiv.classList.remove("d-none");
        messageDiv.textContent = data.message;
      }
    })
    .catch(error => {
      messageDiv.classList.remove("d-none");
      messageDiv.textContent = "Error: " + error.message;
    });
});