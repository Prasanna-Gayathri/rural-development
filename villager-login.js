document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    // Hardcoded login credentials for villagers
    const validVillagerCredentials = [
        { email: 'prasanna@gmail.com', password: 'Pras1155' },
        { email: 'sharmi', password: 'Sharmi4444' }
    ];

    // Handle login form submission
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get user input
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Check if credentials are valid
        const isValid = validVillagerCredentials.some(user => user.email === email && user.password === password);

        if (isValid) {
            // Show login success popup
            showLoginSuccessPopup();
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });

    // Password visibility toggle
    const togglePasswordButton = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');

    togglePasswordButton.addEventListener('click', () => {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            togglePasswordButton.textContent = 'Hide';
        } else {
            passwordField.type = 'password';
            togglePasswordButton.textContent = 'Show';
        }
    });

    // Function to show the success popup
    function showLoginSuccessPopup() {
        // Create popup div
        const popup = document.createElement('div');
        popup.classList.add('popup');
        
        // Create popup content
        const popupContent = `
            <div class="popup-message">
                <h2>Login Successful!</h2>
                <p>You can now log in to access the services.</p>
                <button id="goToServicesBtn">Log In</button>
            </div>
        `;
        popup.innerHTML = popupContent;
        document.body.appendChild(popup);

        // Handle redirection when the "Log In" button is clicked
        const goToServicesBtn = document.getElementById('goToServicesBtn');
        goToServicesBtn.addEventListener('click', () => {
            window.location.href = 'services.html'; // Redirect to services page
        });

        // Close the popup when clicked outside
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                document.body.removeChild(popup);
            }
        });
    }
});

