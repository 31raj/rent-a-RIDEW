// Simple login logic for demo (no backend)
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('loginForm');
  const message = document.getElementById('login-message');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    // Demo: Accept any non-empty username/password
    if (username && password) {
      message.style.color = 'green';
      message.textContent = 'Login successful! Redirecting...';
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1200);
    } else {
      message.style.color = 'red';
      message.textContent = 'Invalid username or password.';
    }
  });
  // Optional: handle sign up link
  document.getElementById('signup-link').onclick = function() {
    alert('Sign up functionality coming soon!');
  };
});