document.addEventListener("DOMContentLoaded", function() {
    const registerBtn = document.getElementById("registerBtn");
    const registrationModal = document.getElementById("registrationModal");
    const closeModal = document.getElementById("closeModal");

    // Open modal on button click
    registerBtn.onclick = function() {
        registrationModal.style.display = "block";
    }

    // Close modal when the user clicks on <span> (x)
    closeModal.onclick = function() {
        registrationModal.style.display = "none";
    }

    // Close modal when clicking outside of the modal
    window.onclick = function(event) {
        if (event.target === registrationModal) {
            registrationModal.style.display = "none";
        }
    }

    // Handle form submission
    const registrationForm = document.getElementById("registrationForm");
    registrationForm.onsubmit = function(event) {
        event.preventDefault();
        alert("Registration submitted!");
        registrationModal.style.display = "none"; // Close modal after submission
        registrationForm.reset(); // Reset form fields
    }
});
