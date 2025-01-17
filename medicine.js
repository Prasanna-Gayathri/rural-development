document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('medicineDeliveryForm');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();  // Prevent the form from being submitted normally
      
      // Get form values
      const name = document.getElementById('name').value;
      const medicine = document.getElementById('medicine').value;
      const medId = document.getElementById('med-id').value;
      const address = document.getElementById('address').value;
      
      // Store form data in sessionStorage
      sessionStorage.setItem('name', name);
      sessionStorage.setItem('medicine', medicine);
      sessionStorage.setItem('medId', medId);
      sessionStorage.setItem('address', address);
  
      // Redirect to the confirmation page
      window.location.href = "medicine_confirmation.html"; 
    });
  });
  