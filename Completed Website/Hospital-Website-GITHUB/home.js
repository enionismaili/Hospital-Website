window.onload = function () {
    // Greet user based on the current time
    updateGreeting();

    // Attach event listeners for article clicks
    document.getElementById('article1').addEventListener('click', function () {
        window.location.href = 'symptoms.html';
    });

    document.getElementById('article2').addEventListener('click', function () {
        window.location.href = 'staff.html';
    });

    // Attach event listener for toggling the chat
    document.getElementById('toggle-chat').addEventListener('click', toggleChat);

    // Attach event listener for sending a message in chat by button click
    document.getElementById('send-button').addEventListener('click', getResponse);

    // Attach event listener for sending a message in chat by pressing the Enter key
    document.getElementById("userInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevents the default action of the Enter key
            getResponse(); // Calls the function to process and display the message
        }
    });
};

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

function toggleChat() {
    var chatContainer = document.getElementById("chat-container");
    var toggleButton = document.getElementById("toggle-chat");
    if (chatContainer.style.display === "none") {
        chatContainer.style.display = "block";
        // Use the chat icon for when the chat is open
        toggleButton.innerHTML = '<i class="fas fa-comment-dots"></i>'; 
    } else {
        chatContainer.style.display = "none";
        // Switch to another icon when the chat is closed
        toggleButton.innerHTML = '<i class="fas fa-comment"></i>'; 
    }
}


function getResponse() {
    let userText = document.getElementById("userInput").value;
    if (userText === "") {
        userText = "I prefer not to talk...";
    }
    let chatbox = document.getElementById("chatbox");
    chatbox.innerHTML += `<p class="userText"><span>${userText}</span></p>`;

    let botResponse = getBotResponse(userText);
    chatbox.innerHTML += `<p class="botText"><span>${botResponse}</span></p>`;

    chatbox.scrollTop = chatbox.scrollHeight;
    document.getElementById("userInput").value = ""; // Clears the input field after sending the message
}

function getBotResponse(input) {
    input = input.toLowerCase();

    switch (input) {
        case "hello":
            return "Hello! I am a chatbot. How can I assist you today?";
        case "help":
            return "Sure, I can help. What do you need assistance with? You can ask about visiting hours, services, appointment booking, or emergency care.";
        case "visiting hours":
            return "Our visiting hours are from 8 AM to 8 PM from Monday to Friday, and from 9 AM to 5 PM on weekends.";
        case "services":
            return "We offer a wide range of medical services including general medicine, surgery, pediatrics, obstetrics, and emergency care.";
        case "appointment booking":
            return "To book an appointment, please visit our website's appointment page or call our reception at 123-456-7890.";
        case "emergency care":
            return "If this is an emergency, please call 911 or head to our emergency department immediately. Our emergency department is open 24/7.";
        case "covid-19":
            return "For information on COVID-19 vaccines, testing, and safety guidelines, please visit our COVID-19 information page.";
        case "insurance":
            return "We accept a wide range of insurance plans. For more detailed information, please visit our insurance and billing page.";
        case "location":
            return "We're located at 123 Health St., Wellness City. For directions, you can find us on Google Maps on our contact page.";
        default:
            return "I'm not sure how to answer that. Can you try asking something else? For more specific inquiries, please contact our helpdesk at help@elitecare.com.";
    }
}
