// Service provider login validation
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual form submission
            
            // Get form values
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Validate service provider login credentials
            if (username === "gayathri@gmail.com" && password === "Gg3333") {
                alert("Login successful!");
                window.location.href = "provider-dashboard.html";  // Redirect to service provider dashboard
            } else {
                alert("Invalid credentials. Please try again.");
            }
        });
    }
});
