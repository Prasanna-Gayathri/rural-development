document.addEventListener('DOMContentLoaded', () => {
    // Get form data from sessionStorage
    const name = sessionStorage.getItem('name');
    const age = sessionStorage.getItem('age');
    const address = sessionStorage.getItem('address');
    const date = sessionStorage.getItem('date');
  
    // Display the data on the confirmation page
    document.getElementById('confirmName').textContent = name;
    document.getElementById('confirmAge').textContent = age;
    document.getElementById('confirmAddress').textContent = address;
    document.getElementById('confirmDate').textContent = date;
  });
  