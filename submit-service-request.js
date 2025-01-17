document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form'); // Select the form element
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Retrieve form values
      const name = document.getElementById('name').value;
      const service = document.getElementById('service').value;
      const issue = document.getElementById('issue').value;
      const address = document.getElementById('address').value;
      const date = document.getElementById('date').value;
  
      // Store the form data in sessionStorage
      sessionStorage.setItem('name', name);
      sessionStorage.setItem('service', service);
      sessionStorage.setItem('issue', issue);
      sessionStorage.setItem('address', address);
      sessionStorage.setItem('date', date);
  
      // Alert for debugging purposes (optional)
      alert('Form details saved! Redirecting to confirmation page.');
  
      // Redirect to the confirmation page
      window.location.href = 'rural-reach-confirmation.html';
    });
  });
  