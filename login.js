// Mobile Navbar Hamburger Toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger-menu');
  const nav = document.getElementById('navbar-links');
  if (hamburger && nav) {
    hamburger.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
    // Optional: close nav when a link is clicked (for single page feel)
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
      });
    });
  }
});

// Popup functions
function showPopup(title, message) {
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popup-title");
  const popupMessage = document.getElementById("popup-message");

  popupTitle.textContent = title;
  popupMessage.textContent = message;
  popup.style.display = "flex";

  // Close popup
  document.querySelector(".popup-close").onclick = () => popup.style.display = "none";
  document.getElementById("popup-ok").onclick = () => popup.style.display = "none";
  window.onclick = (e) => { if (e.target == popup) popup.style.display = "none"; };
}

document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.querySelector("#booking form");

  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const vehicle = document.getElementById("vehicle").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;

      if (vehicle && date && time) {
        showPopup("Booking Confirmed 🎉", `✅ Your ${vehicle} is booked!\n📅 Date: ${date}\n⏰ Time: ${time}`);
        bookingForm.reset();
      } else {
        showPopup("Error ⚠️", "Please fill all booking details.");
      }
    });
  }

  // Rent 
  const rentButtons = document.querySelectorAll("#vehicles button");
  rentButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      showPopup("Rent Now 🚀", "Thanks for choosing this ride! Please confirm in booking section.");
    });
  });

  // Login
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const showLogin = document.getElementById("show-login");
  const showSignup = document.getElementById("show-signup");

  if (showLogin) {
    showLogin.addEventListener("click", () => {
      signupForm.style.display = "none";
      loginForm.style.display = "block";
    });
  }
  if (showSignup) {
    showSignup.addEventListener("click", () => {
      loginForm.style.display = "none";
      signupForm.style.display = "block";
    });
  }
});