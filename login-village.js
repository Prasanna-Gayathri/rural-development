document.addEventListener('DOMContentLoaded', () => {
    const loginVillageForm = document.getElementById('villager-login-form'); // Ensure the form ID is correct

    if (loginVillageForm) {
        loginVillageForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission, so it doesn't reset

            // Get form values
            const email = document.getElementById('villager-email').value; // Get email input value
            const password = document.getElementById('villager-password').value; // Get password input value

            // Validate villager login credentials
            if ((email === "prasanna@gmail.com" && password === "Pras1155") || 
                (email === "sharmi" && password === "Sharmi4444")) {
                // If credentials are correct, redirect to the services page
                window.location.href = "services.html";  // Redirect to services page
            } else {
                // If credentials are incorrect, show an alert
                alert("Invalid credentials. Please try again.");
            }
        });
    }
});


