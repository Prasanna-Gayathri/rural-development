document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('doctorBookingForm');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();  // Prevent form from being submitted normally
      
      // Get form values
      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const address = document.getElementById('address').value;
      const date = document.getElementById('date').value;
  
      // Create a message with the form details
      const message = `
        Done! Your appointment has been successfully booked. \n
        Name: ${name}\n
        Age: ${age}\n
        Address: ${address}\n
        Preferred Date: ${date}
      `;
      
      // Show the confirmation in a popup
      alert(message);
  
      // Optionally clear the form after submission (if desired)
      form.reset();
    });
  });
  