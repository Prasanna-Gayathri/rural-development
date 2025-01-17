// provider-login.js

document.getElementById("provider-login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const email = document.getElementById("provider-email").value;
    const password = document.getElementById("provider-password").value;
  
    const correctEmail = "gayathri@gmail.com";
    const correctPassword = "Gg3333";  // Define valid credentials for provider login
    
    if (email === correctEmail && password === correctPassword) {
      alert("Login successful! Redirecting to your service bookings.");
      window.location.href = "provider-dashboard.html"; // Redirect to service provider dashboard after login
    } else {
      alert("Incorrect email or password. Please try again.");
    }
  });
  