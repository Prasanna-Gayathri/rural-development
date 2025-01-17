document.addEventListener('DOMContentLoaded', () => {
    // Retrieve data from sessionStorage
    const name = sessionStorage.getItem('name');
    const service = sessionStorage.getItem('service');
    const issue = sessionStorage.getItem('issue');
    const address = sessionStorage.getItem('address');
    const date = sessionStorage.getItem('date');
  
    // Display the data on the confirmation page
    document.getElementById('confirmName').textContent = name;
    document.getElementById('confirmService').textContent = service;
    document.getElementById('confirmIssue').textContent = issue;
    document.getElementById('confirmAddress').textContent = address;
    document.getElementById('confirmDate').textContent = date;
  });
  
