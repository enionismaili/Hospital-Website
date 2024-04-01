// Get the form element
var appointmentForm = document.querySelector('form');

// Add submit event listener to the form
appointmentForm.addEventListener("submit", function(event) {
    // Get form inputs
    var nameInput = document.querySelector('input[type="text"]');
    var emailInput = document.querySelector('input[type="email"]');
    var doctorSelect = document.getElementById("doctor");
    var messageTextarea = document.querySelector('textarea');

    // Check if any of the required fields are empty
    if (!nameInput.checkValidity() || !emailInput.checkValidity() || !doctorSelect.checkValidity() || !messageTextarea.checkValidity()) {
        // If any required field is invalid, prevent form submission
        event.preventDefault();
        alert("Please fill in all the required fields correctly.");
    } else {
        // If all required fields are valid, show success message after form submission
        alert("Appointment has been set successfully");
    }
});
