window.onload = function () {
            function updateGreeting() {
                const hour = new Date().getHours();
                let greeting;
                if (hour < 12) {
                    greeting = "Good morning!";
                } else if (hour < 18) {
                    greeting = "Good afternoon!";
                } else {
                    greeting = "Good evening!";
                }
                document.getElementById("greeting").textContent = greeting;
            }

            updateGreeting();
        };


document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    
    // Get values from form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation (further validation can be added)
    if (!name || !email || !password) {
        alert('Please fill in all fields');
        return;
    }

    // Here, you can add code to handle the signup (e.g., send data to a server)
    console.log('Signup details:', {name, email, password});
    alert('Signup successful! (Check console for details)');

    // Reset form
    document.getElementById('signup-form').reset();
});