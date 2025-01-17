document.addEventListener('DOMContentLoaded', () => {
  // Target the form in rural-reach.html
  const form = document.getElementById('ruralReachForm');

  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent default form submission behavior

      // Retrieve form values
      const name = document.getElementById('name').value;
      const service = document.getElementById('service').value;
      const issue = document.getElementById('issue').value;
      const address = document.getElementById('address').value;
      const date = document.getElementById('date').value;

      // Store data in sessionStorage
      sessionStorage.setItem('name', name);
      sessionStorage.setItem('service', service);
      sessionStorage.setItem('issue', issue);
      sessionStorage.setItem('address', address);
      sessionStorage.setItem('date', date);

      // Redirect to confirmation page
      window.location.href = "rural_confirmation.html";
  });
});
