document.addEventListener('DOMContentLoaded', () => {
    // Get form data from sessionStorage
    const name = sessionStorage.getItem('name');
    const medicine = sessionStorage.getItem('medicine');
    const medId = sessionStorage.getItem('medId');
    const address = sessionStorage.getItem('address');
  
    // Display the data on the confirmation page
    document.getElementById('confirmName').textContent = name;
    document.getElementById('confirmMedicine').textContent = medicine;
    document.getElementById('confirmMedId').textContent = medId;
    document.getElementById('confirmAddress').textContent = address;
  });
  