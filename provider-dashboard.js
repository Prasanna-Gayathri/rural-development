// Script for Provider Dashboard
document.addEventListener('DOMContentLoaded', () => {
    // Handle password visibility toggle
    const togglePasswordVisibility = document.querySelectorAll('.password-toggle');

    togglePasswordVisibility.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            const passwordField = document.querySelector(e.target.getAttribute('data-target'));
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
            } else {
                passwordField.type = 'password';
            }
        });
    });
});
