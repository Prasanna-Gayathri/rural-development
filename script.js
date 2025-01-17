// Function to navigate between pages
function navigate(page) {
    window.location.href = page;
}

// Optional: Handle form submission with success message
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual form submission
            alert('Your request has been successfully submitted!');
        });
    });

    // Ensure buttons or links with specific functions also perform navigation
    document.querySelectorAll('button, a').forEach(item => {
        item.addEventListener('click', (e) => {
            const action = item.getAttribute('data-navigate');
            if (action) {
                navigate(action);
            }
        });
    });

    // Additional functionality can be added for more interactivity
});
