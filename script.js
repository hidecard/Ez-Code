document.addEventListener("DOMContentLoaded", function() {
  const loginStatus = document.getElementById("loginStatus");
  
  // Get username from URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("username");

  if (username) {
    // Update navbar to show logged-in user
    loginStatus.innerHTML = `
      <span class="nav-link">Welcome, ${username}</span>
      <a class="nav-link" href="#" onclick="logout()">Logout</a>
    `;
  } else {
    // Show login link
    loginStatus.innerHTML = `<a class="nav-link" href="login.html">Login</a>`;
  }
});

function logout() {
  // Clear query parameters and reload
  window.location.href = "index.html";
}